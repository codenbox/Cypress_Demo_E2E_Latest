/// <reference types="cypress" />

import CheckoutPage from "../../pageObjects/pages/CheckoutPage";
import HomePage from "../../pageObjects/pages/HomePage";
import LoginPage from "../../pageObjects/pages/LoginPage";
import Single_ProductPage from "../../pageObjects/pages/Single_ProductPage";
import Navbar from "../../pageObjects/components/Navbar";

describe('Ecommerce Smoke Suit', {retries:1}, () => {
  const description = 'Intel Core 2 Duo processor';
  const productName = 'MacBook';
  const price = '$602.00'
  const success = "Success"
  beforeEach(function () {
    cy.visit('/')
    cy.url().should('include', 'demo')
    Cypress.config('defaultCommandTimeout', 8000)
    // Clear cookies and local storage before the 1st test
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.fixture('example').then(function (data) {
      this.data = data
    })

  })

  it('Component test',  () => {
    
    Navbar.searchProduct(productName)
    Navbar.validateAllSearchResults().each(($el, index, $list) => {
      cy.wrap($el).should('contain.text', productName)
    })
    Navbar.clickOnMyAccount()
    Navbar.clickOnLogin()
    Navbar.clickOnLogo()

  })


  it('e-2-e smoke test', () => {

    //find all the 4 products
    HomePage.displayProducts().should('have.length', 4)

    // Filter the product list to find the MacBook product
    HomePage.selectProducts(productName)


    // Validate the product name is MacBook
    Single_ProductPage.getProductName().should('be.visible')
      .and('have.text', productName)


    // Validate the price is $602.00
    Single_ProductPage.getProductPrice().should('be.visible')
      .and('have.text', price)


    // Get product description
    Single_ProductPage.getProductDescription().should('have.text', 'Description')


    //Product description has 'Intel Core 2 Duo processor'
    Single_ProductPage.validateProductDescription().invoke('text').then(function (des) {
      des = des.trim()
      expect(des).to.eq(description)
    })

    //write a review
    Single_ProductPage.writeReview()

    //give 5 star rating
    Single_ProductPage.clickOnRating();

    Single_ProductPage.submitReview()//submit review

    // Validate the success message
    Single_ProductPage.validateSuccessMessage()
      .should('be.visible')
      .invoke('text').then(function (text) {
        expect(text.trim()).to.equal(this.data.successMessage)
      })


    //click on add to cart
    Single_ProductPage.clickOnCart()
    Single_ProductPage.validateCartSuccessMessage().should('be.visible')
      .and('contain', success)


    //click on cart menu & validate
    Single_ProductPage.clickOnCartButton()

    Single_ProductPage.getCartItemMenu().should('be.visible')
      .and('contain', 'x 1', '602.00')
      .and('contain', ' View Cart')
      .and('contain', 'Checkout')

    //click on checkout link
    Single_ProductPage.clickOnCheckout()

    //click on loginPage link
    CheckoutPage.clickOnLoginLink();

    // test with invalide login
    LoginPage.failedLogin();


    LoginPage.getWarningMessage().should('be.visible')
      .invoke('text').then(function (text) {
        expect(text.trim()).to.equal(this.data.warning)
      })


    //cy.login();
    LoginPage.successLogin();

    //validate checkout page
    CheckoutPage.validateCheckoutAmount();

  })

})







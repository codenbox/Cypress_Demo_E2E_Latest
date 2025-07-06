/// <reference types="cypress" />
import HomePage from "../../pageObjects_Demo/pages/HomePage.cy";
import BasePage from "../../pageObjects_Demo/BasePage.cy";
import Single_ProductPage from "../../pageObjects_Demo/pages/Single_ProductPage.cy";
import CheckoutPage from "../../pageObjects_Demo/pages/CheckoutPage.cy";
import LoginPage from "../../pageObjects_Demo/pages/LoginPage.cy";

describe.skip('Ecommerce Smoke Suite', () => {
  //const description = 'Intel Core 2 Duo processor'
  const productName = 'MacBook';
  let price = '$602.00'
  //const successMessage = 'Thank you for your review. It has been submitted to the webmaster for approval.';

  before(function () {
    // Clear cookies and local storage before the 1st test
    Cypress.config('defaultCommandTimeout', 8000)
    cy.visit('/')
    cy.url().should('include', 'demo')
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.fixture('example').then(function (data) {
      this.data = data
      //cy.log(this.data.name)
      //cy.log(this.data.review)
    })

  })


  it('e-2-e smoke test', function() {

    //cy.visit('https://demo.codenbox.com/')


    //find all the 4 products
    HomePage.displayProducts().should('have.length', 4)

    // Filter the product list to find the MacBook product
    //const productName = 'MacBook';
    HomePage.selectProducts(productName)



    // Validate the product name is MacBook
    Single_ProductPage.validateProductName(productName).should('be.visible')
      .and('have.text', productName)

    // Validate the price is $602.00
    // let price = '$602.00'
    Single_ProductPage.validatePrice().should('be.visible')
      .and('have.text', price)

    // Validate the product description

    Single_ProductPage.getDescription().should('be.visible')

    // const description = 'Intel Core 2 Duo processor'
    Single_ProductPage.validateDescriptionText().should('be.visible')
      .invoke('text').then(function (des) {
        des = des.trim()
        expect(des).to.eq(this.data.description)
      })

    //it.skip('write review', () => {
    //write a review
    Single_ProductPage.writeReview()


    // cy.get('#content > .nav > :nth-child(3) > .nav-link').click()
    // //get test data from fixture
    // cy.fixture('example.json').then(function (data) {
    //   this.data = data
    //   cy.get('#input-author').type(this.data.name)
    //   cy.get('#input-text').type(this.data.review)
    // })



    //give 5 star rating
    Single_ProductPage.clickOnRating()
    //submit review
    Single_ProductPage.submitReview()


    // Validate the success message
    Single_ProductPage.validateSuccessMessage().should('be.visible')
      .invoke('text').then(function (text) {
        expect(text.trim()).to.equal(this.data.successMessage)
      })

    //click on add to cart
    Single_ProductPage.clickOnCart()
    //validate success message
    Single_ProductPage.validateCartSuccessMessage().should('be.visible')
      .and('contain', 'Success')


    //click on cart button
    //cy.wait(2000)
    BasePage.pause(2000);


    Single_ProductPage.clickOnCartButton()

    Single_ProductPage.getCartItemMenu().should('be.visible')
      .and('contain', 'x 1', '602.00')
      .and('contain', ' View Cart')
      .and('contain', 'Checkout')

    //click on checkout
    //cy.contains('Checkout').click()
    Single_ProductPage.clickOnCheckout()

    //login to account
    CheckoutPage.clickOnLogin()

    //const warning = 'Warning: No match for E-Mail Address and/or Password.'
    LoginPage.failedLogin(this.data.warning)
    //cy.login();
    LoginPage.successLogin()

    CheckoutPage.validateCheckoutAmount()

    //validate checkout page
    // let sum = 0
    // cy.get('table[class="table table-bordered table-hover"] tfoot tr td:nth-child(2)')
    //   .each(($el, index, $list) => {

    //     if (index < $list.length - 1) {

    //       const price = $el.text()  //"$500.00"  $1,020.00  // 500 -> 500.00
    //       // remove $ sign or ,string need to convert to number: regex /[^0-9.-]+/g
    //       const amount = parseFloat(price.replace(/[^0-9.-]+/g, '')) //100
    //       sum = sum + amount  //5002.00 +100.00
    //       cy.log('sum of amount is' + sum);

    //     }
    //   }).then(() =>{ 
    //     cy.get('tfoot > :nth-child(4) > :nth-child(2)').invoke('text').then((total) => {
    //       const totalAmount = parseFloat(total.replace(/[^0-9.-]+/g, '')) //602.00
    //       expect(totalAmount).to.equal(sum) //602.00

    //     })
    //   })

  })

})





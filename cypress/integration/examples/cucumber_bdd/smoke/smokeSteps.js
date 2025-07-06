import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../pageObjects/pages/HomePage"
import Single_ProductPage from "../../../../pageObjects/pages/Single_ProductPage"
import CheckoutPage from "../../../../pageObjects/pages/CheckoutPage"
import LoginPage from "../../../../pageObjects/pages/LoginPage"


Given("I successfully browse to the application", ()=>{
     cy.visit('/')
     cy.url().should('include', 'demo')
})

When('I confirm to find all the 4 products', function(){
    HomePage.displayProducts().should('have.length', 4)
} )

When('I click on product name is {string}', (name)=>{
    HomePage.selectProducts(name)
})

When('I validate the product name is {string} on product details page', function(productName){
    Single_ProductPage.getProductName().should('be.visible')
          .and('have.text', productName)
})

When('I validate the price is {string}', (price)=>{
    Single_ProductPage.getProductPrice().should('be.visible')
          .and('have.text', price)
})

When('I ensure {string} tab is available', (description)=>{
    Single_ProductPage.getProductDescription().should('have.text', description)

})

When('I see description has {string} title', function(processor){
    Single_ProductPage.validateProductDescription().invoke('text').then(function (des) {
          des = des.trim()
          expect(des).to.eq(processor)
        })
})

When('I write a review', function(){
    Single_ProductPage.writeReview()
})

When('I give 5 star rating and submit review', function(){
    Single_ProductPage.clickOnRating(); 
    Single_ProductPage.submitReview()
})

When('I validate success message for submitting review', function(){
    Single_ProductPage.validateSuccessMessage()
          .should('be.visible')
          .invoke('text').then(function (text) {
            expect(text.trim()).to.equal(this.data.successMessage)
          })
})

When('I add item to cart', function(){
    Single_ProductPage.clickOnCart()
        Single_ProductPage.validateCartSuccessMessage().should('be.visible')
          .and('contain', this.data.success)
})

When('I click on cart menu & validate', function(){
    Single_ProductPage.clickOnCartButton()
    Single_ProductPage.getCartItemMenu().should('be.visible')
          .and('contain', 'x 1', '602.00')
          .and('contain', ' View Cart')
          .and('contain', 'Checkout')

})

When('I click on checkout link', function(){
    Single_ProductPage.clickOnCheckout()
})

When('I click on loginPage link', function(){
    CheckoutPage.clickOnLoginLink();
})

When('Login with invalid credential', function(){
     LoginPage.failedLogin();
        LoginPage.getWarningMessage().should('be.visible')
          .invoke('text').then(function (text) {
            expect(text.trim()).to.equal(this.data.warning)
          })
})

When('Login with valid credential', function(){
    LoginPage.successLogin();
})

Then('Ensure sum of amount is equal to total amount', function(){
    CheckoutPage.validateCheckoutAmount();
})




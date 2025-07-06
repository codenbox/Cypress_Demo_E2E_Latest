import BasePage from '../BasePage.js';
export default class Single_ProductPage extends BasePage {

    static getProductName() {
        return cy.get('div[class="col-sm"] h1')

    }

    static getProductPrice() {
       return cy.get('.price-new')

    }

    static getProductDescription() {
        return cy.get('.nav-link.active')

    }

    static validateProductDescription(description) {
       return cy.get('div[id="tab-description"] p:nth-child(1)')
    }

    static writeReview() {
        cy.get('#content > .nav > :nth-child(3) > .nav-link').click()
        //get test data from fixture
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.get('#input-author').type(this.data.name)
            cy.get('#input-text').type(this.data.review)
        })

    }

    static clickOnRating(){
       return cy.get('[value="5"]').click()
    }

    static submitReview(){
        return cy.get('#button-review').click() 
    }

    static validateSuccessMessage(){
       return  cy.get('.alert', { timeout: 5000})
    }

    static clickOnCart(){
       return cy.get('#button-cart').click()
    }

    static validateCartSuccessMessage(){
         return cy.get('.alert.alert-success.alert-dismissible')
    }

    static clickOnCartButton(){
        Single_ProductPage.pause(2000)
       return cy.get('.dropdown.d-grid').click()
    }

    static getCartItemMenu(){
        return cy.get('.dropdown-menu.dropdown-menu-end.p-2.show')
    }

    static clickOnCheckout(){
        return cy.get('.dropdown-menu.dropdown-menu-end.p-2.show').contains('a', 'Checkout').click()
    }



}


    
    


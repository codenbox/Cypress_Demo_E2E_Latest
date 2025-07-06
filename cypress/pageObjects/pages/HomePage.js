import BasePage from '../BasePage.js';
export default class HomePage extends BasePage{

    static displayProducts(){
         return cy.get('.col.mb-3')

    }

    static selectProducts(productName){
        cy.get('.col.mb-3').filter(':contains("' + productName + '")')
      .then(($product) => {
        // Check if the product name is present
        //expect($product.text()).to.include(productName)
        cy.wrap($product).should('have.length', 1)
        //cy.wrap($product).should('be.visible')
        cy.wrap($product).contains('a',productName).click() 
        // Click on the product name
       // cy.contains(productName).click()
      })

    }

}
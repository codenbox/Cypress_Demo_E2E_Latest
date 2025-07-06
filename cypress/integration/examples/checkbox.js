/// <reference types="cypress" />

describe('My checkbox test suite', function(){
    it('checkbox test', function(){
        cy.visit('https://www.codenboxautomationlab.com/practice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        //unchecked the option1 box
        
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        

        //check multiple checkbox options using common attribute
        cy.get('input[type="checkbox"]').check(['option1', 'option2'])
    })
     
})

/// <reference types="cypress" />

describe('Load app and assert title', function(){
    it('should load the app and verify the title', function(){
        cy.visit('https://www.codenboxautomationlab.com/practice/')
       // cy.title().should('eq', 'Codenbox Automation Lab | Practice Page')
       cy.title().should('include', 'CodenBox AutomationLab')
       cy.wait(2000)
       cy.url().should('include', 'practice')
    })

    it('should pause the execution', function(){
        cy.pause()
    })

    it('test to ensure page title is visible', function(){
        cy.visit('https://www.codenboxautomationlab.com/practice/')
        cy.get('.page-title').should('be.visible')

    })




})
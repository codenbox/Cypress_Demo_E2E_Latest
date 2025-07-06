/// <reference types="cypress" />
describe('Test pop-up function', function (){
    beforeEach(function () {
        cy.visit('https://www.codenboxautomationlab.com/practice/')
    })

    
// context ()
context('Test alert and confirmation', function () {
    

    it('Test alert', function () {
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
        expect(str).to.equal('Hello , share this practice page who love to learn automation')
      })

    })

    it('window confirmation', function () {
        cy.get('#confirmbtn').click()
        cy.on('window:confirmation', (str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })

    })

}) 
    
    
})



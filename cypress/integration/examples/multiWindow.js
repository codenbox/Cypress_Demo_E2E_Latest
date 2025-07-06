/// <reference types="cypress" />

describe('Test alert function', function (){
    beforeEach(function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
    })

    it('test child tab', function(){
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.origin("https://www.youtube.com/@CodenboxAutomationLab", () => {
            cy.get('h1[class="dynamic-text-view-model-wiz__h1"] span[role="text"]').should('contain','Codenbox AutomationLab')
        })
        

    })

})
    
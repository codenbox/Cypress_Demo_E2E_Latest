/// <reference types="cypress" />

class BaseClass{
    static loadHomePage(){
        cy.visit('https://codenboxautomationlab.com/')
    }

    static wait(){
        cy.wait(3000)
    }
}

class HomePage extends BaseClass{
    static scrollToConnect(){
        cy.get('tbody tr td span strong span button a').as('connect').scrollIntoView()
        cy.get('@connect').should('be.visible')

    }

    static scrollToWhyChoose(){
        cy.contains('Why Choose Codenbx?').scrollIntoView()
        cy.wait(2000)
    }

}

describe.skip('Page Scroll into View', function (){

    before(function(){
        //runs once before all the test cases excuted 
        //setup test data 
        //seed or reset the database
        HomePage.loadHomePage(); // Load the home page
    })

    beforeEach(function(){
           //runs  before each it block

    })

    after(function(){
        //runs once after all the test cases excuted 
        //test clean up 
        //clean cookies 
        cy.clearCookies()
        cy.clearLocalStorage()

    })

     afterEach(function(){
        //runs after each it block in the describe 
        
    })



    it('Scroll to an element up & down', function(){
        
        HomePage.scrollToConnect(); // Scroll to the let's connect button
        HomePage.wait(); // Wait for 3 seconds
        HomePage.scrollToWhyChoose(); // Scroll to the Why Choose Codenbx? section


    })


})
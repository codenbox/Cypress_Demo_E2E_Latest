import BasePage from '../BasePage.js';
export default class LoginPage extends BasePage{

    static failedLogin(){
        cy.loginShouldFail();

    }

    static getWarningMessage(){
         return cy.get('.alert.alert-danger.alert-dismissible')
    }

    static successLogin(){
        LoginPage.pause(2000)
        cy.login();
    }



}
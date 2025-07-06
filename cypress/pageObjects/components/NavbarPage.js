import BasePage from '../BasePage.js';


export default class NavbarPage extends BasePage {
    static visitHome() {
        cy.visit('https://demo.codenbox.com/');
        //cy.visit('/')
    }

    // static clickListInline() {
    //     cy.get('.col-4 > .list-inline').click();
    // }

    static validateLogoTitle(title) {
        cy.get('#logo > a > .img-fluid').should('have.attr', 'title', title);
    }

    static searchProduct(product) {
        cy.get('.form-control').clear().type(`${product}{enter}`);
    }

    static validateSearchResults(product) {
        cy.get(':nth-child(1) > .product-thumb > .content > .description > h4 > a').should('contain', product);
        cy.get(':nth-child(2) > .product-thumb > .content > .description > h4 > a').should('contain', product);
        cy.get(':nth-child(3) > .product-thumb > .content > .description > h4 > a').should('contain', product);
    }

    static clickMyAccountTab() {
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click();
    }

    static clickLoginMenu() {
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
    }

    static clickLogoImage() {
        cy.get('.img-fluid').click();
    }
}
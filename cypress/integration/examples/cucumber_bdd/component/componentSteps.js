import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavbarPage from "../../../../pageObjects/components/NavbarPage";

Given('I browser to the application', () => {
    NavbarPage.visitHome();
    //NavbarPage.clickListInline();
    NavbarPage.validateLogoTitle('Your Store');
});

When('I click on search box, type {string} and hit enter', (product) => {
    NavbarPage.searchProduct(product);
});

When('I validate the search results contain text {string}', (product) => {
    NavbarPage.validateSearchResults(product);
});

When('I click on My Account tab', () => {
    NavbarPage.clickMyAccountTab();
});

When('I click on Login menu option', () => {
    NavbarPage.clickLoginMenu();
});

When('I click on Logo image', () => {
    NavbarPage.clickLogoImage();
});

Then('Ensure back to home page with title {string}', (title) => {
    NavbarPage.validateLogoTitle(title);
});
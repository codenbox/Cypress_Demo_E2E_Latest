/* ==== Test Created with Cypress Studio ==== */
it('component test script', function() {
  /* ==== Generated with Cypress Studio ==== */
  //browser to the application
  cy.visit('https://demo.codenbox.com/');
  cy.get('.col-4 > .list-inline').click();
  cy.get('#logo > a > .img-fluid').should('have.attr', 'title', 'Your Store');

  //click on search box, type 'MacBook' and hit enter
  cy.get('.form-control').clear('MacBook');
  cy.get('.form-control').type('MacBook{enter}');

 // cy.get('.input-group > .btn').click();
 //validate the search results contain text 'MacBook'
  cy.get(':nth-child(1) > .product-thumb > .content > .description > h4 > a').should('contain', 'MacBook');
  cy.get(':nth-child(2) > .product-thumb > .content > .description > h4 > a').should('contain', 'MacBook');
  cy.get(':nth-child(3) > .product-thumb > .content > .description > h4 > a').should('have.contain', 'MacBook');

//click on My Account tab
  cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click();

//click on Login menu option
  cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click();

//click on Logo image
  cy.get('.img-fluid').click();

//Ensure back to home page with title 'Your Store'
  cy.get('#logo > a > .img-fluid').should('have.attr', 'title', 'Your Store');
  /* ==== End Cypress Studio ==== */
});
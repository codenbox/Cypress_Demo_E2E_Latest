beforeEach(function () {
    // cy.visit('/')
    // cy.url().should('include', 'demo')
    Cypress.config('defaultCommandTimeout', 8000)
    // Clear cookies and local storage before the 1st test
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.fixture('example').then(function (data) {
      this.data = data
    })

  })
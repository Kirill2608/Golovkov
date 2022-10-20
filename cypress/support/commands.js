// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  Cypress.Commands.add('textInput', (locator, text) => {
    cy.get(`${locator}`,{timeout : 4000}).should('be.visible').type('text')
  })

  /**
   * Search for a locator by part of a link
   * @param partOfLink Link text
   */
  //Xpath
  Cypress.Commands.add('linkSearch1', (partOfLink) => {
    cy.get(`//a[contains(text(),'${partOfLink}')]`)
  })
  //CSS
  Cypress.Commands.add('linkSearch2', (partOfLink) => {
    cy.get(`a[href*='${partOfLink}']`,{timeout:4000}).should('be.visible').eq(1).click()
  })
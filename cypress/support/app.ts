/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    visitHomePage(): Chainable<Element>
    visitLoginPage(): Chainable<Element>
    visitFeedbackpage(): Chainable<Element>
  }
}

Cypress.Commands.add('visitHomePage', () => {
  cy.visit("https://www.visible.com/")
})
Cypress.Commands.add('visitLoginPage', ()=> {
  cy.visit("https://www.visible.com/sign-in")
})
Cypress.Commands.add('visitFeedbackpage', ()=> {
  cy.visit("https://www.visible.com/connect")
})
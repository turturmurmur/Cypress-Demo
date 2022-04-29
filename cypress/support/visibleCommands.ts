declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): Chainable<Element>   
  }
}

Cypress.Commands.add('login', (username, password) => {
  cy.get('[id^=signInEmailInput-]').type(username)
  cy.get('[id^=signInPasswordInput-]').type(password)
  cy.get('#signInSubmitBtn').click()
})
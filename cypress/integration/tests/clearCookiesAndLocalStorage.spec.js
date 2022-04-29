/// <reference types="cypress" />

describe('check element visibility', ()=> {

  it('go to url',()=> {
    cy.visit('https://github.com/turturmurmur')
    cy.clearCookies({log: true})
    cy.clearLocalStorage({log: true})
  })
})
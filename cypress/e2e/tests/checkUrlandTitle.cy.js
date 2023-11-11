/// <reference types="cypress" />

describe('URL', ()=> {
  it('check if url contains expected', ()=> {
    cy.visit('https://github.com/turturmurmur', {timeout: 5000}) //use  5sec
    cy.url().should('contain','/turturmurmur')
    cy.url().should('include', 'turturmurmur')
    cy.title().should('eql','turturmurmur · GitHub')
    cy.title().should('contain','turturmurmur')
  })
})
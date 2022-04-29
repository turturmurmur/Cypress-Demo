/// <reference types="cypress" />

describe('check element visibility', ()=> {

  beforeEach('go to url',()=> {
    cy.visit('https://github.com/turturmurmur')
  })

  it('assert if visible', ()=> {
    cy.get('[class="avatar avatar-user width-full border color-bg-default"]').should('be.visible')
  })
})
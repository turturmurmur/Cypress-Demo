/// <reference types="cypress" />

describe('UI scenario', ()=> {
  it('go to website',()=>{
    cy.visitLoginPage()
    cy.login('murat@gmail.com','murat')
    cy.get('label[data-bdd="wrapper"]').should('have.text','The information you entered does not match what we have on file.')
  })
})
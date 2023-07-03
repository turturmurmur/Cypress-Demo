/// <reference types="cypress" />

describe('UI scenario', ()=> {
  const expectedText = 'Please enter a valid email'
  it('go to website', ()=> {
    cy.visit('https://www.visible.com/sign-in')
  })
  it('fail login', ()=>{
    cy.get('[id^="signInEmailInput"]').as('email')
    cy.get('[id^="signInPasswordInput"]').as('password')
    cy.get('#signInSubmitBtn').as('continue')
    

    cy.get('@email').clear().type('murat')
    cy.get('@password').clear().type('murat')
    cy.get('@continue').click()
  })
  it('do assertion',()=>{
    cy.get('label[data-bdd="wrapper"]').as('text')
    cy.get('@text').should('be.visible').and('have.text', expectedText) //or again should('have.text', expectedText)
  })
})

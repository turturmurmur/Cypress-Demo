/// <reference types="cypress" />

describe('UI scenario', ()=> {
  it('go to website', ()=> {
    cy.visit('https://www.visible.com/shop/smartphones')
    cy.log('validate if youre on the right path param')
    cy.url().should('contain','smartphones')
  })
})
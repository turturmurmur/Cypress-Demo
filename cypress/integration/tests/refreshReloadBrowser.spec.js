/// <reference types="cypress" />

describe('UI scenario', ()=> {
  it('go to website', ()=> {
    cy.visit('https://www.visible.com/shop/smartphones')
    cy.log('before reload')
    cy.reload()
    cy.log('after reload')
  })
})
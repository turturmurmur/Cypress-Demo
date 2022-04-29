/// <reference types="cypress" />

describe('UI scenario', ()=> {
  it('go to website', ()=> {
    cy.visit('https://www.visible.com/shop/smartphones')
  })

  it('validate url is right',()=> {
    cy.url().should('include','visible.com/shop/smartphones')
  })

  it('validate x element is visible', ()=> {
    cy.get('a[data-testid="Samsung_Galaxy_A53 5G"]').should('be.visible')
  })

  it.only('go to visible with app.ts commands',()=> {
    cy.visitHomePage()
  
  })

})
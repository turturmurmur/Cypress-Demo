/// <reference types="cypress" />

describe('click on button', ()=> {
  it('click', ()=>{
    cy.visit('https://github.com/')
    cy.get('a[href="/login"]').click({force: true})
  })
})
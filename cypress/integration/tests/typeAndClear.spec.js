/// <reference types="cypress" />

describe('UI scenario', ()=> {
  it('go to website', ()=> {
    cy.visit('https://google.com/')
    cy.get('[name="q"]').as('searchBox')
    cy.get('@searchBox').type('how do I get out of tutorial hell???')
    cy.wait(2000) 
    cy.get('@searchBox').clear()
    //use delay for slow type 
    cy.get('@searchBox').type('who ate my cake???',{delay: 2000})
  })
})
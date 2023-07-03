/// <reference types="cypress" />

describe('check element visibility', ()=> {

  beforeEach('go to url',()=> {
    cy.visit('https://github.com/turturmurmur')
  })

  it('wait',()=>{
    cy.wait(3000);
  })

  it('pause', ()=>{
    cy.pause()
  })
})
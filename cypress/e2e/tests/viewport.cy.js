/// <reference types="cypress" />

describe('UI scenario', ()=> {
  it('720p', ()=> {
    cy.viewport(1280,720)
    cy.visit('https://google.com/')
    cy.wait(2000)
  })
  it('1080p', ()=> {
    cy.viewport(1980,1080)
    cy.visit('https://google.com/')
    cy.wait(2000)
  })
  it('iphone xr', ()=>{
    cy.viewport('iphone-xr')
    cy.visit('https://google.com/')
    cy.wait(2000)
  })
  it('note9', ()=>{
    cy.viewport('samsung-note9')
    cy.visit('https://google.com/')
    cy.wait(2000)
  })
  it('macbook16', ()=>{
    cy.viewport('macbook-16')
    cy.visit('https://google.com/')
    cy.wait(2000)
  })
})
/// <reference types="cypress" />

describe('use fixture', ()=> {
  it('login', ()=>{
    cy.fixture('idPw').then(idPW => {
      const id = idPW.id
      const pw = idPW.pw
      cy.visit('https://www.visible.com/sign-in')
      cy.get('[id^=signInEmailInput-]').type(id)
      cy.get('[id^=signInPasswordInput-]').type(pw)
      cy.get('#signInSubmitBtn').click()
    })
  })
})


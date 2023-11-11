/// <reference types="cypress" />

describe('UI scenario', ()=> {
  it('validate the element count of it', ()=> {
    cy.visit('https://www.thriftbooks.com/?gclid=EAIaIQobChMI9v_-jd619wIVKwytBh3fuQ0TEAAYASAAEgKqQvD_BwE')
    cy.get('[id="wrapper0Recommendations"]>a').its('length').should('eql',5)
  })
})

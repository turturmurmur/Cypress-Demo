/// <reference types="cypress" />

describe('UI scenario', ()=> {
  it('go to website', ()=> {
    cy.visit('https://www.thriftbooks.com/')
    cy.get('[id="wrapper0Recommendations"]>a').first().click()
    cy.contains('.WorkSelector-bold', 'Hardcover').click()
    cy.get('.price').should('contain',25.04)
    //or
    cy.get('.price').should('have.text',25.04)

    //or store the text
    cy.get('.price').should($gtTxt => {
      const text = $gtTxt.text()
      expect(text).to.match(/25.04/)
      //or
      expect(text).to.include('25')
    })
  })
})
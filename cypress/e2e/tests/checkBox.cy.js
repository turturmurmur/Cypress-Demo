
/// <reference types="cypress" />

describe('UI scenario', ()=> {
  it('validate the element count of it', ()=> {
    cy.visit('https://www.thriftbooks.com/browse/?11853col#b.s=mostPopular-desc&b.p=1&b.pp=30&b.col&b.f.t%5B%5D=11853&b.list')
    
  })
  it('check boxes and radio buttons', () => 
  {//for non checkbox tags
    cy.get('.Checkbox-state')
    .then( checkBoxes => {
      cy.wrap(checkBoxes)
        .first().click({force: true})
      })
    })
})
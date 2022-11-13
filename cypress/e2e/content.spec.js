/// <reference types="cypress" />

describe('TEST DE CONTENT',() => {
  
    it('Menu five elements', () =>{
      cy.visit("https://the-internet.herokuapp.com/")
      cy.get(':nth-child(39) > a').click()
      cy.get('a[href*="/shifting_content/menu"]').click()
      cy.get('li').should('have.length',5)
    })  
  })
  

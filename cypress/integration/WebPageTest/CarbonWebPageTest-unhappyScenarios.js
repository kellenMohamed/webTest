describe('Validate Invalid ZipCodes in Carbon Footprint Calculator website', () => {


    it('Validate Invalid ZipCodes', () => {
      cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
      cy.get('#ppl-in-household-input').click()
      cy.get('#ppl-in-household-input').should('be.visible').type('0')
      cy.get('#get-started').click()
      cy.get('#failValidation').should('be.visible')
      cy.get('#invalidZipNum').should('have.text','Please enter a valid five-digit ZIP Code.')
      cy.get('#ppl-in-household-input').click()
      cy.get('#ppl-in-household-input').type('{backspace}')
      cy.get('#ppl-in-household-input').should('be.visible').type('99')
      cy.get('#zip-code-input').click()
      cy.get('#zip-code-input').type('14811543')
      cy.get('#get-started').click()
      cy.contains('We could not find your ZIP code in our database. Please try again, or you may continue using the calculator with a default value. Using the default will give you average estimates.')
      cy.contains('I will use the default ZIP code.')
      cy.get('#zip-code-input').click()
      cy.get('#zip-code-input').type('14811')
      cy.get('#ppl-in-household-input').click()
      cy.get('#ppl-in-household-input').type('{backspace}')
      cy.get('#ppl-in-household-input').type('{backspace}')
      // By automation the field is not allowing many INPUT numbers
      // But in the web is allowing (needs to be investigated
      // Needs to define the field size (Min and Max)
      cy.get('#ppl-in-household-input').type('999999999999999999999999999999999')
    })


})




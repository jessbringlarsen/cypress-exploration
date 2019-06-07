describe('Sample Cypress.io tests', function() {
    it('As basic as it gets', function() {
      expect(true).to.equal(true)
    })
  })
  
  describe('example.cypress.io tests', function() {
    it('verify that by clicking "type" navigates to a new url', function() {
      cy.visit('https://example.cypress.io')
      
      cy.contains('type').click()

      cy.url().should('include', '/commands/actions')
    })
  })
  
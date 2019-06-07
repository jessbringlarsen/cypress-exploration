describe('Sample Cypress.io tests', function() {
    it('As basic as it gets', function() {
      expect(true).to.equal(true)
    })
  })
  
  describe('example.cypress.io tests', function() {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/')
    })
  
    it('verify that by clicking "type" navigates to a new url', function() {
      cy.contains('type').click()

      cy.url().should('include', '/commands/actions')
    })
  
    it('verify the window title', () => {
      cy.title().should('include', 'Kitchen Sink')
    })
  })

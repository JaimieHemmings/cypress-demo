describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })

  it('has valid header text', () => {
    cy.getDataTest('fundamental-header')
      .should('contain.text', 'Testing Fundamentals')
      .should('not.be.empty')
      .should('have.length', 1)
      .invoke('text').then((text) => {
        expect(text.length).to.be.greaterThan(1)
      })
  })

  it('The accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})
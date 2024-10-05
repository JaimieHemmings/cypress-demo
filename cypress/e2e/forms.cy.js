describe('Forms tests', () => {

  beforeEach(() => {
    cy.visit('/forms')
  })

  it('test subscribe form', () => {
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    
    cy.contains(/testing forms/i)

    cy.get('@subscribe-input').type('test@test.com')
    cy.contains(/successfully subbed: test@test.com/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/successfully subbed: test@test.com/i).should('exist')
    cy.wait(3000)
    cy.contains(/successfully subbed: test@test.com/i).should('not.exist')

    cy.get('@subscribe-input').type('test')
    cy.contains(/invalid email: test/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/invalid email: test/i).should('exist')
    cy.wait(3000)
    cy.contains(/invalid email: test/i).should('not.exist')

    cy.contains(/fail/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/fail/i).should('exist')
  })
})
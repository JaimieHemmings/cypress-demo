describe('Various Examples Testing', () => {

  beforeEach(() => {
    cy.visit('/examples')
  })

  it('Multipage testing', () => {
    cy.getDataTest('nav-why-cypress').click();
    cy.location('pathname').should('eq', '/');
    cy.getDataTest('nav-fundamentals').click();    
    cy.location('pathname').should('eq', '/fundamentals');
    cy.getDataTest('nav-overview').click();
    cy.location('pathname').should('eq', '/overview');
    cy.getDataTest('nav-examples').click();
    cy.location('pathname').should('eq', '/examples');
    cy.getDataTest('nav-component').click();
    cy.location('pathname').should('eq', '/component');
  })

  it('intercepts', () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
      statusCode: 200,
      fixture: 'example.json',
    })
    cy.getDataTest('post-button').click();
  })

  it('grudges', () => {
    cy.contains(/add some grudges/i).should('exist')

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 0)
    })

    cy.getDataTest('clear-button').should('not.exist')

    cy.getDataTest('grudge-list-title').should('contain.text', 'Add Some Grudges')

    cy.getDataTest('grudge-form').within(() => {
      cy.get('input').type('some grudge')
    })
    cy.getDataTest('add-grudge-button').click();
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 1)
    })

    cy.getDataTest('grudge-form').within(() => {
      cy.get('input').type('another grudge')
    })
    cy.getDataTest('add-grudge-button').click();
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 2)
      cy.get('li').its(0).should('contain.text', 'some grudge')
      cy.get('li').its(1).should('contain.text', 'another grudge')
    })

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 2)
      cy.get('li').its(0).within(() => {
        cy.get('button').click()
      })
      cy.get('li').should('have.length', 1)
      cy.get('li').its(0).should('contain.text', 'another grudge')
    })

    cy.getDataTest('grudge-list-title').should('contain.text', 'Grudges')

    cy.getDataTest('clear-button').click();
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 0)
    })
  })

})
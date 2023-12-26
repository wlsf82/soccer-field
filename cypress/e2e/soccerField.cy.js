describe('Soccer Game', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('plays a game', () => {
    cy.get('.score-a')
      .as('scoreA')
      .should('be.visible')
      .and('have.text', '0')
    cy.get('.score-b')
      .as('scoreB')
      .should('be.visible')
      .and('have.text', '0')

    cy.get('.play-button').click()

    cy.get('@scoreA')
      .invoke('text')
      .should('be.oneOf', ['0', '1', '2', '3', '4', '5']);
    cy.get('@scoreB')
      .invoke('text')
      .should('be.oneOf', ['0', '1', '2', '3', '4', '5']);

    cy.contains('button', 'Reset').click()

    cy.get('@scoreA').should('have.text', '0')
    cy.get('@scoreB').should('have.text', '0')
  })

  it('shows image instead of the real field on mobile viewport', { viewportWidth: 480 }, () => {
    cy.get('.field').should('not.be.visible')
    cy.get('img[alt="soccer-field"]').should('be.visible')
  })
})

describe('Soccer Game', () => {
  it('plays a game', () => {
    cy.visit('./src/index.html')

    cy.get('.socre-a')
      .as('scoreA')
      .should('be.visible')
      .and('have.text', '0')
    cy.get('.socre-b')
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
})

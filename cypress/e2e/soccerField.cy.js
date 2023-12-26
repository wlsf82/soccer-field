describe('Soccer Game', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('plays and resets a game', () => {
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

  it('shows an image instead of the real field on mobile viewport', { viewportWidth: 480 }, () => {
    cy.get('.field').should('not.be.visible')
    cy.get('img[alt="soccer-field"]').should('be.visible')
  })

  it('ensures audio is played and paused on game play and reset', () => {
    cy.get('.play-button').click()

    cy.get('.score-a')
      .invoke('text')
      .as('scoreAValue')
    cy.get('.score-b')
      .invoke('text')
      .as('scoreBValue')

    cy.get('@scoreAValue').then(scoreA => {
      cy.get('@scoreBValue').then(scoreB => {
        if (scoreA > scoreB) {
          cy.expectGremioHymnPlayingAudio()
        } else if (scoreB > scoreA) {
          cy.expectInterHymnPlayingAudio()
        } else {
          cy.log("It's a tie")
        }
      })
    })

    cy.contains('button', 'Reset').click()

    cy.expectPausedAudio()
  })
})

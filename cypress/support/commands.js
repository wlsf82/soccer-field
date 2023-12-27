Cypress.Commands.add('expectGremioHymnPlayingAudio', () => {
  cy.get('#gremio-hymn').should(audioElements => {
    ensureAudioIsPlaying(audioElements)
  })
})

Cypress.Commands.add('expectInterHymnPlayingAudio', () => {
  cy.get('#inter-hymn').should(audioElements => {
    ensureAudioIsPlaying(audioElements)
  })
})

Cypress.Commands.add('expectPausedAudio', () => {
  cy.get('audio').should(audioElements => {
    let audible = true

    audioElements.each((i, el) => {
      if (el.paused || el.muted) {
        audible = false
      }
    })

    expect(audible).to.eq(false)
  })
})

function ensureAudioIsPlaying(audioElements) {
  let audible = false

  audioElements.each((i, el) => {
    if (el.duration > 0 && el.played && !el.paused && !el.muted) {
      audible = true
    }
  })

  expect(audible).to.eq(true)
}

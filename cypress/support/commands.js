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

  if (
    audioElements[0].duration > 0 &&
    audioElements[0].played.length &&
    !audioElements[0].paused &&
    !audioElements[0].muted
  ) {
    audible = true
  }

  expect(audible).to.eq(true)
}

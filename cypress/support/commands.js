Cypress.Commands.add('expectPlayingAudio', () => {
  cy.get('audio').should(audioElements => {
    let audible = false

    audioElements.each((i, el) => {
      // console.log(el)
      // console.log(el.duration, el.paused, el.muted)
      if (el.duration > 0 && !el.paused && !el.muted) {
        audible = true
      }

    })
    expect(audible).to.eq(true)
  })
})

Cypress.Commands.add('expectPausedAudio', () => {
  cy.get('audio').should(audioElements => {
    let audible = true

    audioElements.each((i, el) => {
      // console.log(el)
      // console.log(el.duration, el.paused, el.muted)
      if (el.paused || el.muted) {
        audible = false
      }

    })
    expect(audible).to.eq(false)
  })
})

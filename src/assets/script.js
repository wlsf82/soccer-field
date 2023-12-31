const playButton = document.querySelector('.play-button')
const gremioHymn = document.getElementById('gremio-hymn')
const interHymn = document.getElementById('inter-hymn')

let isGremioHymnPlaying = false
let isInterHymnPlaying = false

playButton.addEventListener('click', play)

const scoreA = document.querySelector('.score-a')
const scoreB = document.querySelector('.score-b')

function play() {
  const randomScoreForA = Math.floor(Math.random() * 5)
  const randomScoreForB = Math.floor(Math.random() * 5)

  scoreA.innerText = randomScoreForA
  scoreB.innerText = randomScoreForB

  if (randomScoreForA > randomScoreForB) {
    isGremioHymnPlaying = true
    gremioHymn.load()
    gremioHymn.play().then(() => {
      console.log('Gremio hymn playback started!')
    }).catch(error => {
      console.log('Gremio hymn play was prevend by the following error:')
      console.log(error)
    })
  }

  if (randomScoreForB > randomScoreForA) {
    isInterHymnPlaying = true
    interHymn.load()
    interHymn.play().then(() => {
      console.log('Inter hymn playback started!')
    }).catch(error => {
      console.log('Inter hymn play was prevend by the following error:')
      console.log(error)
    })
  }

  playButton.innerText = 'Reset'
  
  playButton.removeEventListener('click', play)
  playButton.addEventListener('click', reset)
}

function reset() {
  if (isGremioHymnPlaying) {
    gremioHymn.pause()
    isGremioHymnPlaying = false
  }

  if (isInterHymnPlaying) {
    interHymn.pause()
    isInterHymnPlaying = false
  }

  scoreA.innerText = '0'
  scoreB.innerText = '0'

  playButton.innerText = 'Play'
  playButton.removeEventListener('click', reset)
  playButton.addEventListener('click', play)
}

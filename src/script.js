const playButton = document.querySelector('.play-button')
const gremioHymn = document.getElementById('gremio-hymn')
const interHymn = document.getElementById('inter-hymn')

let isGremioHymnPlaying = false
let isInterHymnPlaying = false

playButton.addEventListener('click', play)

const socreA = document.querySelector('.socre-a')
const socreB = document.querySelector('.socre-b')

function play() {
  const randomScoreForA = Math.floor(Math.random() * 5)
  const randomScoreForB = Math.floor(Math.random() * 5)

  socreA.innerText = randomScoreForA
  socreB.innerText = randomScoreForB

  if (randomScoreForA > randomScoreForB) {
    isGremioHymnPlaying = true
    gremioHymn.load()
    gremioHymn.play()
  }

  if (randomScoreForB > randomScoreForA) {
    isInterHymnPlaying = true
    interHymn.load()
    interHymn.play()
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

  socreA.innerText = '0'
  socreB.innerText = '0'

  playButton.innerText = 'Play'
  playButton.removeEventListener('click', reset)
  playButton.addEventListener('click', play)
}

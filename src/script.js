const playButton = document.querySelector('.play-button')

playButton.addEventListener('click', play)

const socreA = document.querySelector('.socre-a')
const socreB = document.querySelector('.socre-b')

function play() {
  const randomScoreForA = Math.floor(Math.random() * 5)
  const randomScoreForB = Math.floor(Math.random() * 5)

  socreA.innerText = randomScoreForA
  socreB.innerText = randomScoreForB

  playButton.innerText = 'Reset'
  
  playButton.removeEventListener('click', play)
  playButton.addEventListener('click', reset)
}

function reset() {
  socreA.innerText = '0'
  socreB.innerText = '0'

  playButton.innerText = 'Play'
  playButton.removeEventListener('click', reset)
  playButton.addEventListener('click', play)
}

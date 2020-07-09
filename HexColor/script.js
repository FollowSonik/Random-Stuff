const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const hexBtn = document.querySelector('.hexBtn')
const bodyBcg = document.querySelector('body')
const hex = document.querySelector('.hex')

hex.innerHTML = '#FFFFFF'

console.log(bodyBcg)
hexBtn.addEventListener('click', getHex)

function getHex() {
  let hexCol = '#'
  for (let i = 0; i < 6; i++) {
    hexCol += hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
    console.log(hexCol)
  }
  bodyBcg.style.backgroundColor = hexCol
  hex.innerHTML = hexCol
}
let counter = document.querySelector('.counter')
const addCount = document.querySelector('#addCounterBtn')
const decrementCount = document.querySelector('#decrementCounterBtn')

let count = Number()

addCount.addEventListener('click', incrementCounter)
decrementCount.addEventListener('click', decrementCounter)

function animation() {
  counter.animate(
    [{ opacity: '.2' }, { opacity: '1.0' }],
    { duration: 500, fill: 'forwards' }
  )
}

function incrementCounter() {
  count++
  counter.innerHTML = count
  if (counter.innerHTML > 0) counter.style.color = '#4caf50'
  else if (counter.innerHTML === '0') counter.style.color = '#ffffff'
  animation()
}

function decrementCounter() {
  count--
  counter.innerHTML = count
  if (counter.innerHTML < 0) counter.style.color = 'red'
  else if (counter.innerHTML === '0') counter.style.color = '#ffffff'
  animation()
}
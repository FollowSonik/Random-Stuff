const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
const container = document.querySelector('.images')

let counter = 0

nextBtn.addEventListener('click', nextImage)
prevBtn.addEventListener('click', prevImage)

function animate() {
  container.animate(
    [{ opacity: '0.1' }, { opacity: '1.0' }],
    { duration: 1000, fill: 'forwards' }
  )
}

function nextImage() {
  animate()
  if (counter === 4) {
    counter = -1
  }
  counter++

  container.style.backgroundImage = `url(image/bcg-${counter}.png)`
}

function prevImage() {
  if (counter === 0) {
    counter = 5
  }
  counter--

  animate()
  container.style.backgroundImage = `url(image/bcg-${counter}.png)`
}
const modal = document.querySelector('.modal')
const previews = document.querySelectorAll('.gallery img')
const original = document.querySelector('.full-img')
const caption = document.querySelector('.caption')

previews.forEach(preview => {
  preview.addEventListener('click', () => {
    modal.classList.add('open')
    const originalSrc = preview.getAttribute('data-original')
    original.src = `./full/${originalSrc}`
    const altText = preview.alt
    caption.textContent = altText
  })
})

modal.addEventListener('click', event => {
  if (event.target.classList.contains('modal')) {
    modal.classList.remove('open')
  }
})
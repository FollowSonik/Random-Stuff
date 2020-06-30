const colorBtn = document.querySelector('.colorBtn')
const bodyBcg = document.querySelector('body')

const colors = [
  'yellow', 'red', 'black', 'green', '#3b5998', 'blue', 'lightblue',
  'indigo', 'violet', 'orange',
]

colorBtn.addEventListener('click', changeColor)

function changeColor() {
  bodyBcg.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}
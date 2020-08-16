const name = '';
const NUMBER = Math.floor(Math.random() * 100);

const output = document.getElementById('output');
const prompt = document.getElementById('prompt');

const input = document.querySelector('input');

let guesses = 0;

prompt.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  console.log(input.value);

  input.value = '';
}
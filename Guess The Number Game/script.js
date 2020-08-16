const NUMBER = Math.floor(Math.random() * 100);

const output = document.getElementById('output');
const prompt = document.getElementById('prompt');

const input = document.querySelector('input');

let name = '';
let guesses = 0;

console.log(NUMBER);

prompt.addEventListener('submit', handleSubmit);

printMessage('What\s your name?');

input.focus();

function handleSubmit(event) {
  event.preventDefault();

  processInput(input.value);

  input.value = '';
}

function printMessage(msg) {
  const li = document.createElement('li');

  li.textContent = msg;

  output.appendChild(li);
}

function processInput(input) {
  if (!input) return;

  if (!name) {
    name = input;
    clearOutput();
    return printMessage(`${name}, a number from 0 to 100 (not included) is conceived. Try to guess it in the fewest possible attempts. After each try, I will say: "little", "a lot" or "true."`);
  }

  printMessage(input);

  let guess = parseInt(input);

  if (isNaN(guess)) return;

  guesses++;

  if (guess > NUMBER) printMessage('A lot!');
  else if (guess < NUMBER) printMessage('A little..');
  else {
    printMessage(`TRUE! PogU! ${guess}`);
    printMessage(`Number of attempts: ${guesses}`);
    printMessage('Game Over!');

    prompt.remove();
  }
}

function clearOutput() {
  for (let i = 0; i < output.children.length; i++) {
    output.removeChild(output.children[i]);
  }
}
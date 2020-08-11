let clicks = 0;

const TIMEOUT = 5e3;

const display = document.getElementById('display');
const button = document.getElementById('button');
const counter = document.getElementById('counter');

button.onclick = start;

function start() {
  button.onclick = () => counter.textContent = clicks++;

  const timeout = setTimeout(() => {
    button.onclick = null;
    display.textContent = 'Game Over';

    clearTimeout(timeout);
  }, TIMEOUT);
}
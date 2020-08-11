let clicks = 0;

const TIMEOUT = 5e3;

const display = document.getElementById('display');
const button = document.getElementById('button');
const counter = document.getElementById('counter');

button.onclick = start;

function start() {
  const startTime = Date.now();

  display.textContent = TIMEOUT;
  button.onclick = () => counter.textContent = clicks++;

  const interval = setInterval(() => {
    const delta = Date.now() - startTime;
    display.textContent = TIMEOUT - delta;
  }, 100);

  const timeout = setTimeout(() => {
    button.onclick = null;
    display.textContent = 'Game Over';

    clearInterval(interval);
    clearTimeout(timeout);
  }, TIMEOUT);
}
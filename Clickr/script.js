let clicks = 0;

const TIMEOUT = 5e3;

const display = document.getElementById('display');
const button = document.getElementById('button');
const counter = document.getElementById('counter');

button.onclick = start;

function start() {
  const startTime = Date.now();

  display.textContent = formatTime(TIMEOUT);
  button.onclick = () => counter.textContent = clicks++;

  const interval = setInterval(() => {
    const delta = Date.now() - startTime;
    display.textContent = formatTime(TIMEOUT - delta);
  }, 1);

  const timeout = setTimeout(() => {
    button.onclick = null;
    display.textContent = 'Game Over';

    clearInterval(interval);
    clearTimeout(timeout);
  }, TIMEOUT);
}

function formatTime(ms) {
  return Number.parseFloat(ms / 1e3).toFixed(3);
}
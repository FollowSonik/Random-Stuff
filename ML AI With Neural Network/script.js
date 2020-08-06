const net = new brain.NeuralNetwork();

const data = [
  {
    input: { r: 0, g: 0, b: 0, },
    output: [1],
  },
  {
    input: { r: 1, g: 1, b: 1, },
    output: [0],
  },
];

net.train(data);

const colorEl = document.getElementById('color');
const pogEl = document.getElementById('pog');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');

let color;

setRandomColor();

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  colorEl.style.backgroundColor = `
    rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})
  `;
}
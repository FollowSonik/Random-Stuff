const net = new brain.NeuralNetwork();
const diagram = document.getElementById('diagram');

net.train([
  {
    input: [0, 0],
    output: [0],
  },
  {
    input: [1, 0],
    output: [1],
  },
  {
    input: [0, 1],
    output: [1],
  },
  {
    input: [1, 1],
    output: [1],
  },
]);

diagram.innerHTML = brain.utilities.toSVG(net);
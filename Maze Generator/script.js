let cols, rows;
let w = 40;

const grid = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const cell = new Cell(i, j);
      grid.push(cell);
    }
  }
}

function draw() {
  background(51);

  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}

function Cell(i, j) {
  this.i = i;
  this.j = j;

  this.show = function () {
    let x = this.i * w;
    let y = this.j * w;

    stroke(255);
    line(x, y, x + w, y);
    // line(x + w, y, x + w, y + w);
    line(x + w, y + w, x, y + w);
    line(x, y + w, x, y);

    // noFill();
    // rect(x, y, w, w);
  }
}
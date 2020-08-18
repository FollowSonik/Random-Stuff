const cols = 5;
const rows = 5;
const grid = new Array(cols);

function setup() {
  createCanvas(400, 400);
  console.log('A*');

  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  console.log(grid);
}

function draw() {
  background(111);
}
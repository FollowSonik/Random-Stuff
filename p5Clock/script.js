function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  let h = hour();
  let min = minute();
  let secs = second();

  fill(255);
  noStroke();
  text(`${h}:${min}:${secs}`, 10, 200);
}
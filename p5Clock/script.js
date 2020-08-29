function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let h = hour();
  let min = minute();
  let secs = second();

  // strokeWeight(4);
  // stroke(255);
  // noFill();
  // ellipse(200, 200, 300, 300);

  strokeWeight(8);
  stroke(255, 100, 150);

  let end = map(mouseX, 0, width, 0, 360);

  arc(200, 200, 300, 300, 0, end);

  // fill(255);
  // noStroke();
  // text(`${h}:${min}:${secs}`, 10, 200);
}
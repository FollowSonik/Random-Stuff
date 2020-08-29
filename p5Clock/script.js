function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let h = hour();
  let min = minute();
  let secs = second();

  // strokeWeight(4);
  // stroke(255);
  // noFill();
  // ellipse(200, 200, 300, 300);

  strokeWeight(8);
  noFill();
  stroke(255, 100, 150);
  let endSecs = map(secs, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, endSecs);

  stroke(255, 100, 255);
  let endMins = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, endMins);

  stroke(255, 255, 100);
  let endHours = map(h % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, endHours);

  // fill(255);
  // noStroke();
  // text(`${h}:${min}:${secs}`, 10, 200);
}
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

  getLine(endSecs, endMins, endHours);

  stroke(255);
  point(0, 0);
}

function getLine(secs, mins, hours) {
  push();
  rotate(secs);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mins);
  stroke(255, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hours);
  stroke(255, 255, 100);
  line(0, 0, 50, 0);
  pop();
}
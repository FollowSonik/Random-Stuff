let rocket;
let population;
let lifespan = 400;
let lifeP;
let count = 0;
let target;
let rx = 100;
let ry = 150;
let rw = 200;
let rh = 10;
let maxForse = .2;

function setup() {
  createCanvas(400, 300);
  rocket = new Rocket();
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);
}

function draw() {
  background(0);
  population.run();
  lifeP.html(count);

  count++;

  if (count == lifespan) {
    population.evaluate();
    population.selection();

    population = new Population();
    count = 0;
  }

  fill(255);
  rect(100, 150, 200, 10);

  ellipse(target.x, target.y, 16, 16);
}
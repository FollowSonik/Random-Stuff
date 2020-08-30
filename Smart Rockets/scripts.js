let rocket;
let population;
let lifespan = 200;
let lifeP;
let count = 0;

function setup() {
  createCanvas(400, 300);
  rocket = new Rocket();
  population = new Population();
  lifeP = createP();
}

function draw() {
  background(0);
  population.run();
  lifeP.html(count);
  count++;
}

function Population() {
  this.rockets = [];
  this.popsize = 25;

  for (let i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();
  }

  this.run = function () {
    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}

function DNA() {
  this.genes = [];

  for (let i = 0; i < lifespan; i++) {
    this.genes[i] = p5.Vector.random2D();
    this.genes[i].setMag(.1);
  }
}

function Rocket() {
  this.pos = createVector(width / 2, height);
  this.vel = createVector();
  this.acc = createVector();
  this.dna = new DNA();

  this.applyForce = function (force) {
    this.acc.add(force);
  }

  this.update = function () {
    this.applyForce(this.dna.genes[count]);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function () {
    push();
    noStroke();
    fill(250, 100);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 25, 5);
    pop();
  }
}
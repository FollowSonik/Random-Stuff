let rocket;
let population;
let lifespan = 200;
let lifeP;
let count = 0;
let target;

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

  ellipse(target.x, target.y, 16, 16);
}

function Population() {
  this.rockets = [];
  this.popsize = 25;
  this.matingpool = [];

  for (let i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();
  }

  this.evaluate = function () {
    let maxfit = 0;

    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();

      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }

    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i].fitness /= maxfit;
    }

    this.matingpool.length = 0;

    for (let i = 0; i < this.popsize; i++) {
      const n = this.rockets[i].fitness * 100;

      for (let j = 0; j < n; j++) {
        this.matingpool.push(this.rockets[i]);
      }
    }
  }

  this.selection = function () {
    const newRockets = [];

    for (let i = 0; i < this.rockets.length; i++) {
      const parentA = random(this.matingpool).dna;
      const parentB = random(this.matingpool).dna;
      const child = parentA.crossover(parentB);

      newRockets[i] = new Rocket(child);
    }

    this.rockets = newRockets;
  }

  this.run = function () {
    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}

function DNA(genes) {
  if (genes) {
    this.genes = genes;
  } else {
    this.genes = [];

    for (let i = 0; i < lifespan; i++) {
      this.genes[i] = p5.Vector.random2D();
      this.genes[i].setMag(.1);
    }
  }

  this.crossover = function (partner) {
    const newGenes = [];

    const mid = floor(random(this.genes.length));

    for (let i = 0; i < this.genes.length; i++) {
      if (i > mid) newGenes[i] = this.genes[i];
      else newGenes[i] = partner.genes[i];
    }

    return new DNA(newGenes);
  }
}

function Rocket(dna) {
  this.pos = createVector(width / 2, height);
  this.vel = createVector();
  this.acc = createVector();
  this.completed = false;

  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }

  this.fitness = 0;

  this.applyForce = function (force) {
    this.acc.add(force);
  }

  this.calcFitness = function () {
    const d = dist(this.pos.x, this.pos.y, target.x, target.y);

    this.fitness = map(d, 0, width, width, 0);
  }

  this.update = function () {
    const d = dist(this.pos.x, this.pos.y, target.x, target.y);

    if (d < 10) {
      this.completed = true;
      this.pos = target.copy();
    }

    this.applyForce(this.dna.genes[count]);

    if !(this.completed) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
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
class Population {
  constructor() {
    this.rockets = [];
    this.popsize = 25;
    this.matingpool = [];

    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i] = new Rocket();
    }
  }

  evaluate() {
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
  };

  selection() {
    const newRockets = [];

    for (let i = 0; i < this.rockets.length; i++) {
      const parentA = random(this.matingpool).dna;
      const parentB = random(this.matingpool).dna;
      const child = parentA.crossover(parentB);

      child.mutation();

      newRockets[i] = new Rocket(child);
    }

    this.rockets = newRockets;
  };

  run() {
    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  };
}
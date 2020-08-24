class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
  }

  highlight() {
    let x = this.i * w;
    let y = this.j * w;

    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);
  };

  show() {
    let x = this.i * w;
    let y = this.j * w;

    stroke(255);

    if (this.walls[0]) {
      line(x, y, x + w, y);
    }

    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }

    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }

    if (this.walls[3]) {
      line(x, y + w, x, y);
    }

    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 0);
      rect(x, y, w, w);
    }
  };

  checkNeighbors() {
    const neigbors = [];

    const top = grid[index(this.i, this.j - 1)];
    const right = grid[index(this.i + 1, this.j)];
    const bottom = grid[index(this.i, this.j + 1)];
    const left = grid[index(this.i - 1, this.j)];

    if (top && !top.visited) {
      neigbors.push(top);
    }

    if (right && !right.visited) {
      neigbors.push(right);
    }

    if (bottom && !bottom.visited) {
      neigbors.push(bottom);
    }

    if (left && !left.visited) {
      neigbors.push(left);
    }

    if (neigbors.length > 0) {
      const rand = floor(random(0, neigbors.length));
      return neigbors[rand];
    }
    else
      return void 0;
  };
}
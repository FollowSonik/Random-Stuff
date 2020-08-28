class Tree {
  constructor() {
    this.root = null;
  }

  traverse() {
    this.root.visit(this.root);
  }

  search(val) {
    return this.root.search(val);
  }

  addValue(val) {
    let n = new Node(val);

    if (this.root == null) {
      this.root = n;
      this.root.x = width / 2;
      this.root.y = 16;
    }
    else {
      this.root.addNode(n);
    }
  }
}
let tree;

function setup() {
  noCanvas();

  tree = new Tree();
  let n = new Node(5);

  tree.addNode(n);

  console.log(tree);
}

function Tree() {
  this.root = null;
}

Tree.prototype.addNode = n => {
  if (this.root == null) {
    this.root = n;
  }
};

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}
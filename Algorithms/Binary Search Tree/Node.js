function Node(val, x, y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
}

Node.prototype.search = function (val) {
  if (this.value == val) {
    return val;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }

  return null;
};

Node.prototype.visit = function () {
  if (this.left != null) {
    this.left.visit();
  }

  console.log(this.value);

  fill(255);
  noStroke();
  text(this.value, this.x, this.y);

  if (this.right != null) {
    this.right.visit();
  }
};

Node.prototype.addNode = function (n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
    } else this.left.addNode(n);
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
    } else this.right.addNode(n);
  }
};
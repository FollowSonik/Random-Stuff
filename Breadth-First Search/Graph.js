function Graph() {
  this.nodes = [];
  this.graph = {};
}

Graph.prototype.addNode = function (n) {
  this.nodes.push(n);
  const title = n.value;
  this.graph[title] = n;
}

Graph.prototype.getNode = function (actor) {
  return this.graph[actor];
}
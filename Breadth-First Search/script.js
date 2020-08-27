let data;
let graph;

function preload() {
  data = loadJSON("kevin.json");
}

function setup() {
  graph = new Graph();
  noCanvas();
  const movies = data.movies;

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i].title;
    const cast = movies[i].cast;
    const n = new Node(movie);
    graph.addNode(n);

    for (let j = 0; j < cast.length; j++) {
      const actor = cast[j];
      const actorNode = new Node(actor);
      graph.addNode(actorNode);
    }
  }

  console.log(graph);
}
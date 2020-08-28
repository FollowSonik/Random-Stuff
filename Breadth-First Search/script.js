let data;
let graph;

function preload() {
  data = loadJSON("kevin.json");
}

function setup() {
  graph = new Graph();
  const dropdown = createSelect();
  dropdown.changed(bfs);

  noCanvas();

  const movies = data.movies;

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i].title;
    const cast = movies[i].cast;
    const movieNode = new Node(movie);
    graph.addNode(movieNode);

    for (let j = 0; j < cast.length; j++) {
      const actor = cast[j];
      let actorNode = graph.getNode(actor);

      if (actorNode == void 0) {
        actorNode = new Node(actor);
        dropdown.option(actor);
      }

      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
    }
  }
}

function bfs() {
  const start = graph.setStart("Rachel McAdams");
  const end = graph.setEnd("Kevin Bacon");

  console.log(graph);

  const queue = [];
  start.searched = true;
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();

    if (current == end) {
      console.log("Found!", current.value);
      break;
    }

    const edges = current.edges;

    for (let i = 0; i < edges.length; i++) {
      const neighbor = edges[i];

      if (!neighbor.searched) {
        neighbor.searched = true;
        neighbor.parent = current;

        queue.push(neighbor);
      }
    }
  }

  const path = [];

  path.push(end);

  let next = end.parent;

  while (next != null) {
    path.push(next);
    next = next.parent;
  }

  let txt = "";

  for (let i = path.length - 1; i >= 0; i--) {
    const n = path[i];

    txt += n.value;

    if (i != 0) {
      txt += " ––> ";
    }
  }

  createP(txt);
}
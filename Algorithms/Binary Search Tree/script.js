let tree;

function setup() {
  noCanvas();

  tree = new Tree();

  for (let i = 0; i < 10; i++) {
    tree.addValue(floor(random(0, 100)));
  }

  console.log(tree);
  tree.traverse();

  const result = tree.search(10);

  if (result == null) {
    console.log("Not found.");
  } else console.log(result);
}
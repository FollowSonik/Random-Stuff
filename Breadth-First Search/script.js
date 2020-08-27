let data;

function preload() {
  data = loadJSON("kevin.json");
}

function setup() {
  noCanvas();
  console.log(data);
}
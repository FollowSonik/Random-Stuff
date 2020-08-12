function points(games) {
  // let total = 0;

  // games.forEach(game => {
  //   const [x, y] = game.split(':').map(Number);

  //   if (x > y) total += 3;
  //   else if (x === y) total += 1
  // });

  // return total;
  return games.reduce((acc, game) => {
    const [x, y] = game.split(':').map(Number);

    if (x > y) acc += 3;
    else if (x === y) acc += 1

    return acc;
  }, 0);
}

const array = [
  '1:0', '2:0', '3:0',
  '4:0', '2:1', '3:1',
];

console.log(points(array));
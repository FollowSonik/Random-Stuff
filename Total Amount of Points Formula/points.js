function points(games) {
  let total = 0;

  games.forEach(game => {
    const [x, y] = game.split(':').map(Number);

    if (x > y) total += 3;
    else if (x === y) total += 1
  })

  return total;
}
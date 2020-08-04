let hit = 0;
let miss = 0;

function count(n, cache = []) {
  if (n < 0) {
    miss++;
    return 0;
  }

  if (!cache[n]) {
    miss++;
    if (n === 0) cache[n] = 1;
    else cache[n] = count(n - 1, cache) + count(n - 2, cache) + count(n - 3, cache);
  }

  hit++;
  return cache[n];
}

// 7847 maximum with BigInt, without – 1165.
console.log(count(1165), `Misses: ${miss}, Hits: ${hit}.`);
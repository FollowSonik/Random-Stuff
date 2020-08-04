function fact(n) {
  let result = 1n;

  for (let i = 1n; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Also there's no limit I think, but in the end of the BigInt number will zeros..
console.log(fact(BigInt(112456)));
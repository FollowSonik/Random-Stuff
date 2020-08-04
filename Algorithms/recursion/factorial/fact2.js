function fact(n) {
  const stack = [[n, 1n]];

  while (stack.length > 0n) {
    const [current, result] = stack.pop();

    if (current === 0n || current === 1n) {
      return result;
    }

    stack.push([current - 1n, result * current]);
  }
}

// There's no limit I think, but in the end of the BigInt number will zeros..
console.log(fact(BigInt(32418)));
function fact(n) {
  if (n === 0n || n === 1n) {
    return 1n;
  }

  return n * fact(n - 1n);
}

// With even BigInt the maximum number is to passed to recursion.
console.log(fact(BigInt(11417)));

// Stack Size Check:

// let counter = 0;

// function count() {
//   counter++;
//   count();
// }

// try {
//   count();
// } catch {
//   console.error(counter);
// }
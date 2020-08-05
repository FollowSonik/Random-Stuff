function fib(n, prev = []) {
  if (prev[n] != null) return prev[n];

  let result;

  if (n <= 2n) result = 1n;
  else result = fib(n - 1n, prev) + fib(n - 2n, prev);

  prev[n] = result;
  return result;
}

console.log(fib(433n));
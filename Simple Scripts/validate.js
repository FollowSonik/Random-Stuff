function validate(n) {
  let digits = n.toString().split('').map(Number);

  if (digits.length % 2 === 0) {
    digits = digits.map((digit, index) => {
      return index % 2 === 1 ? digit : digit;
    });
  } else {
    digits = digits.map((digit, index) => {
      return index % 2 === 0 ? digit : digit;
    });
  }
}
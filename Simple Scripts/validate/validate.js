function validate(n) {
  const digits = n.toString().split('').map(Number);

  const sum = digits.map((digit, index) => {
    return index % 2 === digits.length % 2 ? fixDouble(digit * 2) : digit;
  }).reduce((acc, digit) => {
    return acc += digit;
  }, 0);

  return sum % 10 === 0;
}

function fixDouble(number) {
  return number > 9 ? number - 9 : number;
}

console.log(validate(56789));
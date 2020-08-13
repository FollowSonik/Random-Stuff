function maskify(creditCard) {
  return creditCard.split('').map((letter, index) => {
    return index < creditCard.length - 4 ? '#' : letter
  }).join('');
}

console.log(maskify('3321141'));
function palindrome(num) {
  if (typeof num !== 'number' || num < 0) return 'Not valid.';

  return +num.toString().split('').reverse().join('') === num;
}

console.log(palindrome(1221));
console.log(palindrome(123222));
console.log(palindrome('reqwbrew'));
console.log(palindrome(-124));
console.log(palindrome('321321'));
console.log(palindrome(NaN));
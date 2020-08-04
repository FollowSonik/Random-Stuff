// const arr = [1, 2, 3, 5, 6, 4, 7, 1, 12, 8, 13, 9, 10, 1, 11];
function randomArr(len) {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * 101));
  }

  return arr;
}

const pog = randomArr(11111).sort((a, b) => a - b);

console.log(countFreq(pog, 0));

function search(arr, element) {
  let left = -1;
  let right = arr.length;

  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === element) return mid;
    if (arr[mid] > element) right = mid;
    else left = mid;
  }

  return -1;
}

function countFreq(arr, element) {
  const pos = search(arr, element);

  if (pos === -1) return 0;

  let i = pos;
  while (arr[i] === element) i--;

  let j = pos;
  while (arr[j] === element) j++;

  return j - i - 1;
}
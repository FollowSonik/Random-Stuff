const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

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

console.log(search(arr, 10));
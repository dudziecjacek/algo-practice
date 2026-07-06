// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function blockRanges(arr, k) {
  const blockSize = arr.length / k;
  const arrOfNumbers = [];

  for (let i = 0; i < arr.length; i += blockSize) {
    let min = Infinity;
    let max = -Infinity;
    for (let j = i; j < i + blockSize; j++) {
      const arrEl = arr[j];
      if (arrEl < min) {
        min = arrEl;
      }
      if (arrEl > max) {
        max = arrEl;
      }
    }
    arrOfNumbers.push(max - min);
  }

  return arrOfNumbers;
}

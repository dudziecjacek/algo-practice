// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function blockMaxima(arr, blockSize) {
  let blockOfMax = [];

  for (let i = 0; i < arr.length; i += blockSize) {
    let max = -Infinity;

    for (let j = i; j < i + blockSize; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }

    blockOfMax.push(max);
  }

  return blockOfMax;
}

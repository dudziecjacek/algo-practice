// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function blockMaxima(arr, blockSize) {
  const result = [];

  for (let i = 0; i < arr.length; i += blockSize) {
    let currentMax = arr[i];

    for (let j = i + 1; j < i + blockSize; j++) {
      if (arr[j] > currentMax) {
        currentMax = arr[j];
      }
    }

    result.push(currentMax);
  }

  return result;
}

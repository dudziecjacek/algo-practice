// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function widestBlock(arr, k) {
  const blockSize = arr.length / k;
  let largestRange = -Infinity;
  let bestIndex = 0;

  for (let i = 0; i < arr.length; i += blockSize) {
    let min = Infinity;
    let max = -Infinity;

    for (let j = i; j < i + blockSize; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    if (max - min > largestRange) {
      largestRange = max - min;
      bestIndex = i;
    }
  }

  return bestIndex;
}

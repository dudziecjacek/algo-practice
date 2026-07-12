// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function blockMinima(arr, blockSize) {
  const blocks = [];

  for (let i = 0; i < arr.length; i += blockSize) {
    let min = Infinity;
    for (let j = i; j < i + blockSize; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
    }
    blocks.push(min);
  }

  return blocks;
}

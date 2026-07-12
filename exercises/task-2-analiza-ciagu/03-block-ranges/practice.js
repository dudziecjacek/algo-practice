// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function blockRanges(arr, k) {
  const blockSizes = arr.length / k;
  const maxes = [];

  for (let i = 0; i < arr.length; i += blockSizes) {
    let min = Infinity;
    let max = -Infinity;

    for (let j = i; j < i + blockSizes; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
      if (arr[j] > max) {
        max = arr[j];
      }
    }

    maxes.push(max - min);
  }

  return maxes;
}

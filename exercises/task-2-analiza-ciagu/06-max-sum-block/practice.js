// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function maxSumBlock(arr, k) {
  const blockSize = arr.length / k;
  let largestSum = -Infinity;

  for (let i = 0; i < arr.length; i += blockSize) {
    let sum = 0;

    for (let j = i; j < i + blockSize; j++) {
      sum += arr[j];
    }

    if (sum > largestSum) {
      largestSum = sum;
    }
  }

  return largestSum;
}

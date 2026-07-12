// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function equilibrium(arr) {
  const total = arr.reduce((p, c) => p + c, 0);
  let currentLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentLeft === total - arr[i] - currentLeft) {
      return i;
    }

    currentLeft += arr[i];
  }

  return -1;
}

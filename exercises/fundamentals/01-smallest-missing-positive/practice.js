// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function smallestMissingPositive(arr) {
  const set = new Set(arr);

  for (let i = 1; i <= arr.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}

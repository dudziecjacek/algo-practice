// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function firstOppositePair(arr) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(-arr[i])) {
      return Math.abs(arr[i]);
    }
    set.add(arr[i]);
  }

  return -1;
}

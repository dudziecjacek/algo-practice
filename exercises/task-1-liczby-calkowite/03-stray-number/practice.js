// @ts-nocheck
// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function stray(numbers) {
  const counts = {};

  for (let i = 0; i < numbers.length; i++) {
    counts[numbers[i]] = (counts[numbers[i]] || 0) + 1;
  }

  for (const el in counts) {
    if (counts[el] === 1) {
      return Number(el);
    }
  }
}

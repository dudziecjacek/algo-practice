// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function sumPairs(numbers, target) {
  const set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    const currentDiff = target - numbers[i];

    if (set.has(currentDiff)) {
      return [currentDiff, numbers[i]];
    }

    set.add(numbers[i]);
  }

  return undefined;
}

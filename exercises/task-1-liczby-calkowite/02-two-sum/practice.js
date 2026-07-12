// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function twoSum(numbers, target) {
  const mapInts = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const currentDiff = target - numbers[i];

    if (mapInts.has(currentDiff)) {
      return [mapInts.get(currentDiff), i];
    }

    if (!mapInts.has(numbers[i])) {
      mapInts.set(numbers[i], i);
    }
  }
  return undefined;
}

// k: 1 v:0
// k: 2 v:1

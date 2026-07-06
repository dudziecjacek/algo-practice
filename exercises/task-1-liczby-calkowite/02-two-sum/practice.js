// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function twoSum(numbers, target) {
  const sumMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const missingNumber = target - numbers[i];
    if (sumMap.has(missingNumber)) {
      return [sumMap.get(missingNumber), i];
    }
    sumMap.set(numbers[i], i);
  }
  return undefined;
}

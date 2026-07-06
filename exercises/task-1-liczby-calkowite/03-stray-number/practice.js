// @ts-nocheck
// Your turn. Implement the function, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js

export function stray(numbers) {
  const count = {};

  for (let i = 0; i < numbers.length; i++) {
    const givenNumber = numbers[i];
    count[givenNumber] = count[givenNumber] ? count[givenNumber] + 1 : 1;
  }

  for (const key in count) {
    if (count[key] === 1) {
      return Number(key);
    }
  }
}

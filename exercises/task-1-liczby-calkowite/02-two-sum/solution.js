export function twoSum(numbers, target) {
  const seen = new Map(); // value -> index

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    // store only the FIRST index of each value, so the earliest partner wins
    if (!seen.has(numbers[i])) {
      seen.set(numbers[i], i);
    }
  }

  return undefined; // no pair completes
}

export function sumPairs(numbers, target) {
  const seen = new Set();

  for (const x of numbers) {
    const complement = target - x;
    if (seen.has(complement)) {
      return [complement, x];
    }
    seen.add(x);
  }

  return undefined;
}

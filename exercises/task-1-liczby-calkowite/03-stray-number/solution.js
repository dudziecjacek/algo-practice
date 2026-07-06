export function stray(numbers) {
  const counts = {};
  for (const n of numbers) {
    counts[n] = (counts[n] || 0) + 1;
  }
  for (const key in counts) {
    if (counts[key] === 1) return Number(key);
  }
}

// Alternative: bitwise XOR — O(n) time, O(1) space, no hash at all.
// Works because the common value appears an even number of times,
// so x ^ x === 0 cancels it out and only the stray remains.
// export function stray(numbers) {
//   return numbers.reduce((acc, n) => acc ^ n, 0);
// }

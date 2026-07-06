function stray(numbers) {
  const counts = {};
  for (const n of numbers) {
    counts[n] = (counts[n] || 0) + 1;
  }
  for (const key in counts) {
    if (counts[key] === 1) return Number(key);
  }
}

// secon
// export function stray(numbers) {
//   return numbers.reduce((acc, n) => acc ^ n, 0);
// }

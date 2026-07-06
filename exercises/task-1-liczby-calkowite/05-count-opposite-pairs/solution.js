export function countOppositePairs(arr) {
  const count = new Map();
  for (const n of arr) {
    count.set(n, (count.get(n) || 0) + 1);
  }

  let pairs = 0;
  for (const [value, c] of count) {
    if (value > 0) {
      pairs += c * (count.get(-value) || 0);
    } else if (value === 0) {
      pairs += (c * (c - 1)) / 2;
    }
    // negative values are the -v of some positive; already counted above
  }

  return pairs;
}

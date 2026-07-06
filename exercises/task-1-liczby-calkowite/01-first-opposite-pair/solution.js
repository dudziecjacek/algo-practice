export function firstOppositePair(arr) {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    if (seen.has(-x)) {
      return Math.abs(x);
    }
    seen.add(x);
  }

  return -1;
}

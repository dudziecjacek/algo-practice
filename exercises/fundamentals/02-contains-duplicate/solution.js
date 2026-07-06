export function containsDuplicate(arr) {
  const seen = new Set();

  for (const n of arr) {
    if (seen.has(n)) return true;
    seen.add(n);
  }

  return false;
}

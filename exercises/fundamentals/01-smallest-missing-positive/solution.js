export function smallestMissingPositive(A) {
  const seen = new Set(A);
  for (let i = 1; i <= A.length + 1; i++) {
    if (!seen.has(i)) return i;
  }
}

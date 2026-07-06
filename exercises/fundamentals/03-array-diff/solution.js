export function arrayDiff(a, b) {
  const remove = new Set(b);
  return a.filter((x) => !remove.has(x));
}

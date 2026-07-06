export function firstFreeLocker(ids) {
  const taken = new Set(ids);

  let i = 1;
  while (taken.has(i)) {
    i++;
  }
  return i;
}

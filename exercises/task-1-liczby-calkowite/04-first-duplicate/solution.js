export function firstDuplicate(arr) {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return arr[i];
    }
    seen.add(arr[i]);
  }

  return -1;
}

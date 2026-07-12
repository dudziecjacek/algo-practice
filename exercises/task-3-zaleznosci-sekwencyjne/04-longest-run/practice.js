export function longestRun(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let longestStretch = 1;
  let current = 1;

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      current += 1;
      if (current > longestStretch) {
        longestStretch = current;
      }
    } else {
      current = 1;
    }
  }

  return longestStretch;
}

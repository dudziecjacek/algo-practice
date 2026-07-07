export function longestRun(arr) {
  if (arr.length === 0) return 0;

  let best = 1;
  let current = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      current++;
      if (current > best) best = current;
    } else {
      current = 1; // the breaking element starts a new run
    }
  }

  return best;
}

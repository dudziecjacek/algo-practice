export function pivotMultiplier(arr, k) {
  const total = arr.reduce((a, b) => a + b, 0);
  let leftSide = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSide = total - arr[i] - leftSide;
    if (k * leftSide === rightSide) {
      return i;
    }
    leftSide += arr[i];
  }

  return -1;
}

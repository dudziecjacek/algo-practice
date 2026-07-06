export function equilibrium(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSum = total - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }

  return -1;
}

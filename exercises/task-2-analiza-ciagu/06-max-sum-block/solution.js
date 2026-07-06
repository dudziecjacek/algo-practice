export function maxSumBlock(arr, k) {
  const blockSize = arr.length / k;
  let best = -Infinity;

  for (let b = 0; b < k; b++) {
    const start = b * blockSize;
    let sum = 0;
    for (let i = start; i < start + blockSize; i++) {
      sum += arr[i];
    }
    if (sum > best) best = sum;
  }

  return best;
}

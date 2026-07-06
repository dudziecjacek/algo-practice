export function widestBlock(arr, k) {
  const blockSize = arr.length / k;
  let bestIndex = 0;
  let bestRange = -Infinity;

  for (let b = 0; b < k; b++) {
    const start = b * blockSize;
    let min = arr[start];
    let max = arr[start];

    for (let i = start + 1; i < start + blockSize; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }

    const range = max - min;
    if (range > bestRange) {
      bestRange = range;
      bestIndex = b;
    }
  }

  return bestIndex;
}

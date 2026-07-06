export function largestBlockRange(arr, k) {
  const blockSize = arr.length / k;
  let largest = 0;

  for (let b = 0; b < k; b++) {
    const start = b * blockSize;
    let min = arr[start];
    let max = arr[start];

    for (let i = start; i < start + blockSize; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }

    const range = max - min;
    if (range > largest) largest = range;
  }

  return largest;
}

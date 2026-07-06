export function blockRanges(arr, k) {
  const blockSize = arr.length / k;
  const result = [];

  for (let b = 0; b < k; b++) {
    const start = b * blockSize;
    let min = arr[start];
    let max = arr[start];

    for (let i = start + 1; i < start + blockSize; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }

    result.push(max - min);
  }

  return result;
}

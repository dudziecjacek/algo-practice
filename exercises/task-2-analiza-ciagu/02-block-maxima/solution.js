export function blockMaxima(arr, blockSize) {
  const result = [];

  for (let start = 0; start < arr.length; start += blockSize) {
    let max = arr[start];
    for (let i = start + 1; i < start + blockSize; i++) {
      if (arr[i] > max) max = arr[i];
    }
    result.push(max);
  }

  return result;
}

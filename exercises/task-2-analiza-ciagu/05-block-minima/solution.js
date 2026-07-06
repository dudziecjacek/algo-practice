export function blockMinima(arr, blockSize) {
  const result = [];

  for (let start = 0; start < arr.length; start += blockSize) {
    let min = arr[start];
    for (let i = start + 1; i < start + blockSize; i++) {
      if (arr[i] < min) min = arr[i];
    }
    result.push(min);
  }

  return result;
}

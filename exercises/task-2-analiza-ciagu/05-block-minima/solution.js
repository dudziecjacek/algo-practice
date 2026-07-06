export function blockMinima(arr, blockSize) {
  const result = [];

  for (let start = 0; start < arr.length; start += blockSize) {
    // clamp: the last block may be shorter than blockSize
    const end = Math.min(start + blockSize, arr.length);
    let min = arr[start];
    for (let i = start + 1; i < end; i++) {
      if (arr[i] < min) min = arr[i];
    }
    result.push(min);
  }

  return result;
}

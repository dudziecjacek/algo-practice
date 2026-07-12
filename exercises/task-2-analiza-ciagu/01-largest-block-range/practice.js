export function largestBlockRange(arr, k) {
  const blockSize = arr.length / k;
  let largestRange = -Infinity;

  for (let i = 0; i < arr.length; i += blockSize) {
    let min = Infinity;
    let max = -Infinity;

    for (let j = i; j < i + blockSize; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
      if (arr[j] > max) {
        max = arr[j];
      }
    }

    const currentRange = max - min;

    if (currentRange > largestRange) {
      largestRange = currentRange;
    }
  }

  return largestRange;
}

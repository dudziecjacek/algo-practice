export function blockRanges(arr, k) {
  const blockSize = arr.length / k;
  const result = [];

  for (let b = 0; b < k; b++) {
    const start = b * blockSize;
    let min = Infinity;
    let max = -Infinity;

    // Seeding with ±Infinity means the loop MUST start at `start` —
    // starting at start+1 silently drops each block's first element.
    for (let i = start; i < start + blockSize; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }

    result.push(max - min);
  }

  return result;
}

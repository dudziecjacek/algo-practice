export function kthLargest(nums, k) {
  const arr = nums.slice();
  const target = arr.length - k; // index in ascending-sorted order

  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const p = partition(arr, lo, hi);
    if (p === target) return arr[p];
    if (p < target) lo = p + 1;
    else hi = p - 1;
  }

  return undefined;
}

function partition(arr, lo, hi) {
  // Randomize the pivot so sorted / adversarial input can't force O(n^2).
  // Expected time stays O(n); without this, a sorted array degrades badly.
  const r = lo + Math.floor(Math.random() * (hi - lo + 1));
  [arr[r], arr[hi]] = [arr[hi], arr[r]];

  const pivot = arr[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[hi]] = [arr[hi], arr[i]];
  return i;
}

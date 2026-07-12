export function eraseOverlapIntervals(intervals) {
  if (intervals.length === 0) return 0;

  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);

  let removed = 0;
  let end = sorted[0][1];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] < end) {
      removed++; // overlaps -> drop it, keep the earlier-ending one
    } else {
      end = sorted[i][1];
    }
  }

  return removed;
}

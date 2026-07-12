# Non-Overlapping Intervals

Given an array of `intervals` where `intervals[i] = [start, end]`, return
the **minimum number of intervals you must remove** so that the rest do
not overlap. Intervals that only touch at the endpoint (e.g. `[1,2]` and
`[2,3]`) do **not** count as overlapping.

```js
export function eraseOverlapIntervals(intervals) {
  // ...
}
```

## Examples

```js
eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]); // -> 1
eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]);         // -> 2
eraseOverlapIntervals([[1, 2], [2, 3]]);                 // -> 0
```

## Constraints

- Classic **greedy interval scheduling**: **sort by end time**, then
  sweep left to right keeping the interval that ends earliest. Whenever
  the next interval starts before the current `end`, it overlaps — remove
  it (count++) and keep the earlier-ending one.
- Sorting is O(n log n), the sweep is O(n). Don't mutate the input — sort
  a copy.

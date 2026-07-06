# Count Opposite Pairs

Given an array of integers, count how many index pairs `(i, j)` with
`i < j` satisfy `arr[i] + arr[j] === 0` — i.e. a number and its negative
counterpart (two zeros count as an opposite pair too, since `0 = -0`).

```js
export function countOppositePairs(arr) {
  // ...
}
```

## Examples

```js
countOppositePairs([1, -1, 2, -2, 1]) // -> 3   ((1,-1),(-1,1),(2,-2))
countOppositePairs([0, 0, 0])         // -> 3   (every pair of zeros)
countOppositePairs([1, 2, 3])         // -> 0
countOppositePairs([-4, 4])           // -> 1
```

## Constraints

- Length up to 1,000,000 — must be O(n). Checking every pair is O(n²).
- Values can be negative, zero, or positive.

## Pattern / gotcha

Build a frequency map in one pass, then combine counts — don't loop over
pairs. For each positive value `v`, the number of opposite pairs is
`count[v] * count[-v]`. Zeros are special: any two zeros form a pair, so
add `count[0] * (count[0] - 1) / 2`. Only iterate positive keys (and
zero) so each unordered pair is counted exactly once.

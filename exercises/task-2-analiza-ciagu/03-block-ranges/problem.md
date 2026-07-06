# Block Ranges

Given an array of integers and a positive integer `k`, split the array
into `k` equal consecutive blocks (length divisible by `k`) and return an
array with the range (`max - min`) of each block, in order.

```js
export function blockRanges(arr, k) {
  // ...
}
```

## Examples

```js
blockRanges([1, 5, 2, 8, 3, 3], 3) // -> [4, 6, 0]   (blocks [1,5][2,8][3,3])
blockRanges([10, 1, 2, 9], 2)      // -> [9, 7]
blockRanges([4, 4, 4, 4], 2)       // -> [0, 0]
blockRanges([-5, 5, 0, 0], 2)      // -> [10, 0]
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- Numbers can be negative, zero, or positive. `k >= 1`, length divisible by `k`.

## Pattern / gotcha

Track both `min` and `max` in a single pass per block (seed both with the
block's first element), then push `max - min`. This is the same skill as
Largest Block Range and Block Maxima combined — no sorting, no
`Math.min(...slice)` / `Math.max(...slice)` spread. Each element is
visited once → O(n).

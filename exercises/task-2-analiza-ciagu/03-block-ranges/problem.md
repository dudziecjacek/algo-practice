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
blockRanges([1, 5, 2, 8, 3, 3], 3); // -> [4, 6, 0]   (blocks [1,5][2,8][3,3])
blockRanges([10, 1, 2, 9], 2); // -> [9, 7]
blockRanges([4, 4, 4, 4], 2); // -> [0, 0]
blockRanges([-5, 5, 0, 0], 2); // -> [10, 0]
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- Numbers can be negative, zero, or positive. `k >= 1`, length divisible by `k`.

<!-- ## Pattern / gotcha

Track both `min` and `max` in a single pass per block, then push
`max - min`. Two valid seeding styles — don't mix them up:

- seed with the block's **first element** and scan from the *second*, or
- seed with `Infinity` / `-Infinity` and scan from the *first*.

Seeding with `±Infinity` but starting the scan at `start + 1` silently
drops each block's first element — `[10, 20]` with `k = 1` returns `[0]`
instead of `[10]`. This is the same skill as Largest Block Range and
Block Maxima combined — no sorting, no `Math.min(...slice)` /
`Math.max(...slice)` spread. Each element is visited once → O(n). -->

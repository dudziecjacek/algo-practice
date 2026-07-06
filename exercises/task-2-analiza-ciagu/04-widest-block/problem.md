# Widest Block

Given an array of integers and a positive integer `k`, split the array
into `k` equal consecutive blocks (length divisible by `k`). Return the
**0-based index of the block** whose range (`max - min`) is the largest.
On a tie, return the earliest such block.

```js
export function widestBlock(arr, k) {
  // ...
}
```

## Examples

```js
widestBlock([1, 5, 2, 8, 3, 3], 3)   // -> 1   (ranges 4, 6, 0 -> block 1 is widest)
widestBlock([10, 1, 2, 9], 2)        // -> 0   (ranges 9, 7)
widestBlock([7, 7, 1, 2, 3, 100], 3) // -> 2   (ranges 0, 1, 97)
widestBlock([4, 4, 4, 4], 2)         // -> 0   (ranges 0, 0 -> tie, earliest)
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- Numbers can be negative, zero, or positive. `k >= 1`, length divisible by `k`.

## Pattern / gotcha

Like Largest Block Range, but you return *which* block wins rather than
the winning value. Track the best range seen and its index; update only
on a **strict** `>` so ties keep the earliest index. Compute each block's
min/max in a single pass — no sorting, no spread.

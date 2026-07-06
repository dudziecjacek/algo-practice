# Largest Block Range

Given an array of integers and a positive integer `k`, split the array
into `k` equal, consecutive blocks (the array length is divisible by
`k`). For each block compute its range = `max(block) - min(block)`.
Return the largest range across all blocks.

```js
export function largestBlockRange(arr, k) {
  // ...
}
```

## Examples

```js
largestBlockRange([1, 5, 2, 8, 3, 3], 3)   // -> 6   (blocks [1,5][2,8][3,3] -> 4,6,0)
largestBlockRange([10, 1, 2, 9], 2)        // -> 9
largestBlockRange([7, 7, 1, 2, 3, 100], 3) // -> 97
largestBlockRange([4, 4, 4, 4], 2)         // -> 0
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- Numbers can be negative, zero, or positive. `k >= 1`, length divisible by `k`.

## Pattern / gotcha

Two traps, both O(n) work *inside* the loop:

1. `[...arr].splice(i, blockSize)` clones the whole array per block. Read
   `arr[i]` directly by index instead — no copy.
2. `Math.min(...block)` / `Math.max(...block)` spreads the block as
   function arguments: two passes per block *and* a `RangeError` once a
   block exceeds the engine's argument limit (~65k+). Track `min`/`max`
   in one explicit inner loop.

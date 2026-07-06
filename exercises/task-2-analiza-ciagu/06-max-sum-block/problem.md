# Max Sum Block

Given an array of integers and a positive integer `k`, split the array
into `k` equal consecutive blocks (length divisible by `k`). Return the
**largest block sum** among all blocks.

```js
export function maxSumBlock(arr, k) {
  // ...
}
```

## Examples

```js
maxSumBlock([1, 2, 3, 4, 5, 6], 3) // -> 11  (blocks [1,2][3,4][5,6] -> 3,7,11)
maxSumBlock([1, 2, 3, 4], 2)       // -> 7   (blocks [1,2][3,4] -> 3,7)
maxSumBlock([-1, -2, -3, -4], 2)   // -> -3  (blocks -3,-7 -> largest is -3)
maxSumBlock([5], 1)                // -> 5
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- Numbers can be negative, zero, or positive. `k >= 1`, length divisible by `k`.

## Pattern / gotcha

Same "split into ranges, compare parts" skill as the other Task-2
exercises, but the per-block aggregate is a **sum** instead of min/max.
Accumulate each block's sum in one inner pass and keep the largest —
don't `arr.slice(...).reduce(...)` per block (that clones subarrays).
Seed the running best with `-Infinity` (not `0`) so all-negative inputs
return the correct, largest-but-still-negative sum.

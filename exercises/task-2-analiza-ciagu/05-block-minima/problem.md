# Block Minima (uneven blocks)

Given an array `arr` and a positive integer `blockSize`, split the array
into consecutive blocks of `blockSize` elements. **The length does NOT
have to be divisible by `blockSize`** — the last block simply holds
whatever is left over (it may be shorter). Return an array containing the
**minimum** of each block, in order.

```js
export function blockMinima(arr, blockSize) {
  // ...
}
```

## Examples

```js
blockMinima([1, 5, 2, 8, 3], 2)  // -> [1, 2, 3]   (blocks [1,5][2,8][3])
blockMinima([4, 4, 4], 2)        // -> [4, 4]      (blocks [4,4][4])
blockMinima([-5, -1, -9], 2)     // -> [-5, -9]
blockMinima([7, 3], 5)           // -> [3]         (one short block)
blockMinima([], 3)               // -> []
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- `blockSize >= 1`. Length may be **anything**, including `0` and values
  smaller than `blockSize`.

## Pattern / gotcha

This is Block Maxima's sibling, but with the divisibility guarantee
removed — which is exactly how real assessment tasks like to sneak in an
off-by-one. Two traps:

1. Computing the number of blocks as `Math.floor(length / blockSize)`
   **drops the tail block entirely** — `[1, 5, 2, 8, 3]` with
   `blockSize = 2` returns 2 minima instead of 3. Either loop
   `start += blockSize` while `start < length`, or use `Math.ceil`.
2. The inner scan must stop at
   `Math.min(start + blockSize, arr.length)`, not `start + blockSize` —
   don't walk past the end of the array.

Still no sorting and no `Math.min(...slice)` spread. One visit per
element → O(n).

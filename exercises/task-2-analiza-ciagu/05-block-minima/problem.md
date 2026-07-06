# Block Minima

Given an array `arr` and a positive integer `blockSize`, split the array
into consecutive blocks of `blockSize` elements (length divisible by
`blockSize`) and return an array containing the **minimum** of each
block, in order.

```js
export function blockMinima(arr, blockSize) {
  // ...
}
```

## Examples

```js
blockMinima([1, 5, 2, 8, 3, 3], 2) // -> [1, 2, 3]   (blocks [1,5][2,8][3,3])
blockMinima([4, 4, 4, 4], 2)       // -> [4, 4]
blockMinima([-5, -1, -9, -3], 2)   // -> [-5, -9]
blockMinima([7], 1)                // -> [7]
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- `blockSize >= 1`, length divisible by `blockSize`.

## Pattern / gotcha

The mirror image of Block Maxima — seed `min` with the block's first
element and keep the smaller value as you scan the rest by index. No
sorting, no `Math.min(...slice)` spread (extra pass + stack-overflow risk
on huge blocks). One visit per element → O(n).

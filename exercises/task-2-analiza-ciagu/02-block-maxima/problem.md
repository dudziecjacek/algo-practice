# Block Maxima

Given an array `arr` and a positive integer `blockSize`, split the array
into consecutive blocks of `blockSize` elements (length is divisible by
`blockSize`) and return an array containing the maximum of each block, in
order.

```js
export function blockMaxima(arr, blockSize) {
  // ...
}
```

## Examples

```js
blockMaxima([1, 5, 2, 8, 3, 3], 2) // -> [5, 8, 3]   (blocks [1,5][2,8][3,3])
blockMaxima([4, 4, 4, 4], 2)       // -> [4, 4]
blockMaxima([-5, -1, -9, -3], 2)   // -> [-1, -3]
blockMaxima([7], 1)                // -> [7]
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- `blockSize >= 1`, length divisible by `blockSize`.

## Pattern / gotcha

The same "split into ranges, track an extreme per block" skill as Largest
Block Range, but returning one value per block instead of a single
scalar. Seed `max` with the block's first element and scan the rest by
index — don't `Math.max(...slice)` (spread limit / extra pass) and don't
sort. Walk each element exactly once → O(n) overall.

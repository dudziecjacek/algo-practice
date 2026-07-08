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
blockMinima([1, 5, 2, 8, 3], 2); // -> [1, 2, 3]   (blocks [1,5][2,8][3])
blockMinima([4, 4, 4], 2); // -> [4, 4]      (blocks [4,4][4])
blockMinima([-5, -1, -9], 2); // -> [-5, -9]
blockMinima([7, 3], 5); // -> [3]         (one short block)
blockMinima([], 3); // -> []
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- `blockSize >= 1`. Length may be **anything**, including `0` and values
  smaller than `blockSize`.

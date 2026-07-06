# Equilibrium Index

Given an array of integers, an equilibrium index is an index `i` where
the sum of all elements before `i` equals the sum of all elements after
`i`. Return the first equilibrium index, or `-1` if none exists. The
element at index `i` counts on neither side.

```js
export function equilibrium(arr) {
  // ...
}
```

## Examples

```js
equilibrium([-7, 1, 5, 2, -4, 3, 0]) // -> 3
equilibrium([1, 2, 3, 4, 3, 2, 1])   // -> 3
equilibrium([1, 2, 3])               // -> -1
equilibrium([10])                    // -> 0 (empty left = empty right = 0)
```

## Constraints

- Length up to 1,000,000 — must be O(n). A per-index "sum left, sum
  right" is O(n²).
- Elements can be negative, zero, or positive.

## Pattern / gotcha

Compute the total once, then sweep with a running `leftSum`, deriving the
right side as `total - leftSum - arr[i]`. Check the condition **before**
folding `arr[i]` into `leftSum` — that ordering makes "left" mean
*strictly before* `i` and removes any need to special-case index 0 or an
empty array. Seed `reduce` with `0` so an empty array doesn't throw.

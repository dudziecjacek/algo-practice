# Pivot with Multiplier

Harder variant of Equilibrium Index. Given an array `arr` and a positive
integer `k`, find the first index `i` where the sum of elements to the
left of `i`, multiplied by `k`, equals the sum of elements to the right
of `i`: `k * leftSum === rightSum`. The element at `i` counts on neither
side. Return the first such index, or `-1`.

```js
export function pivotMultiplier(arr, k) {
  // ...
}
```

## Examples

```js
pivotMultiplier([1, 2, 3, 6], 2)  // -> 2   (left=3, right=6, 2*3===6)
pivotMultiplier([4, 0, 8], 2)     // -> 1   (left=4, right=8, 2*4===8)
pivotMultiplier([-3, 1, 2, 1], 1) // -> 3   (k=1 collapses to plain equilibrium)
pivotMultiplier([1, 2, 3], 5)     // -> -1
```

## Constraints

- Length up to 1,000,000 — must be O(n), single pass after the total.
- Elements can be negative, zero, or positive. `k` is a positive integer.

## Pattern / gotcha

Same two-piece-state structure as Equilibrium Index (precomputed total +
running left sum), but the multiplier breaks the "each side is half the
total" shortcut — you must actually compare `k * leftSum` against
`rightSum` each step. Apply the multiplier to the **left** side; swapping
it passes the symmetric `k=1` cases but fails asymmetric ones like
`[1,2,3,6]`.

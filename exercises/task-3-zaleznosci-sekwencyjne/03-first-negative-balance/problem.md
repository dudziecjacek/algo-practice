# First Negative Balance

An array of integers represents daily transactions on an account
(positive = deposit, negative = withdrawal). The account starts at
balance 0. Return the index of the first transaction after which the
running balance becomes negative. If it never goes negative, return
`-1`.

```js
export function firstNegative(transactions) {
  // ...
}
```

## Examples

```js
firstNegative([10, -5, -3, -4, 8]) // -> 3   (running: 10, 5, 2, -2)
firstNegative([5, 5, 5])           // -> -1  (never negative)
firstNegative([-1, 10, 10])        // -> 0   (negative immediately)
firstNegative([3, -3, -1])         // -> 2   (0 is not negative; -1 at index 2)
```

## Constraints

- Length up to 1,000,000 — must be O(n), single pass.
- Transactions can be positive, negative, or zero.

## Pattern / gotcha

The simplest member of the family — a single running accumulator, no
precomputed total needed. The trap is recomputing the sum from scratch
each index (`arr.slice(0, i).reduce(...)`) instead of carrying one
variable forward. A balance of exactly `0` is **not** negative — the
trigger is strictly `< 0`.

# Sum of Pairs

Given an array of integers and a target sum, return the **first pair**
whose values add up to the target — "first" meaning the pair that
*completes earliest* (its second element has the smallest index).
Return the pair as `[a, b]` in the order they appear, or `undefined` if
no pair sums to the target.

```js
export function sumPairs(numbers, target) {
  // ...
}
```

## Examples

```js
sumPairs([1, 4, 8, 7, 3, 15], 8)   // -> [1, 7]
sumPairs([1, -2, 3, 0, -6, 1], -6) // -> [0, -6]
sumPairs([20, -13, 40], -7)        // -> undefined
sumPairs([1, 2, 3, 4, 1, 0], 2)    // -> [1, 1]
sumPairs([10, 5, 2, 3, 7, 5], 10)  // -> [3, 7]
```

## Constraints

- The array can be very large (up to millions) — must be O(n). A nested
  loop over every pair is O(n²) and will time out.

## Pattern / gotcha

The trap is collecting *all* pairs and then choosing — that gets the
"earliest completing" rule wrong, and the nested scan is O(n². Instead,
sweep once with a `Set` of values already seen: for each `x`, check
whether `target - x` is already in the set; if so, return
`[target - x, x]` **immediately** (that's the earliest completion by
construction). Otherwise add `x` and continue. Checking before adding is
what lets `[1, 1]` work when two equal numbers are needed.

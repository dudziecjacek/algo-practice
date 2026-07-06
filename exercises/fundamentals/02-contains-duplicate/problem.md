# Contains Duplicate

Given an array of integers, return `true` if any value appears at least
twice, and `false` if every element is distinct.

```js
export function containsDuplicate(arr) {
  // ...
}
```

## Examples

```js
containsDuplicate([1, 2, 3, 1]) // -> true
containsDuplicate([1, 2, 3, 4]) // -> false
containsDuplicate([])           // -> false
containsDuplicate([2, 2])       // -> true
```

## Constraints

- Length up to 1,000,000 — must be O(n).

## Pattern / gotcha

The naive "compare every pair" is O(n²). Sweep once with a `Set`: if the
current value is already in the set, return `true` immediately; otherwise
add it. Return `false` if you finish the sweep. (An alternative one-liner
is `new Set(arr).size !== arr.length`, but the early-exit loop stops as
soon as it finds the first repeat.)

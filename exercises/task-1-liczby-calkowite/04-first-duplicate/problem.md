# First Duplicate

Given an array of integers, return the first value that appears a second
time — i.e. the value whose **second occurrence** has the smallest index.
Return `-1` if every value is unique.

```js
export function firstDuplicate(arr) {
  // ...
}
```

## Examples

```js
firstDuplicate([2, 1, 3, 5, 3, 2]) // -> 3   (3 repeats at index 4, before 2 repeats at index 5)
firstDuplicate([2, 4, 3, 5, 1])    // -> -1  (all unique)
firstDuplicate([1, 1, 2])          // -> 1
firstDuplicate([5, 5, 5])          // -> 5
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- Values can be negative, zero, or positive.

## Pattern / gotcha

The naive `arr.indexOf(x) !== i` or a nested loop is O(n²). Sweep once
with a `Set`: for each element, if it's already in the set you've found
the first value to *complete* a duplicate → return it immediately; else
add it. "First by second occurrence" falls straight out of returning the
moment you re-see a value — don't collect all duplicates and pick later.

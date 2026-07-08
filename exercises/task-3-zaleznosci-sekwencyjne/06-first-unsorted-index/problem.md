# First Unsorted Index

Given an array of integers, return the first index `i` at which the
sequence stops being non-decreasing — i.e. the first `i` where
`arr[i] < arr[i - 1]`. If the whole array is already in non-decreasing
order, return `-1`. (Equal neighbours are allowed — they don't break
order.)

```js
export function firstUnsortedIndex(arr) {
  // ...
}
```

## Examples

```js
firstUnsortedIndex([1, 2, 3, 2, 5]); // -> 3   (2 < 3)
firstUnsortedIndex([1, 2, 3, 4]); // -> -1  (already sorted)
firstUnsortedIndex([5, 4, 3]); // -> 1   (4 < 5)
firstUnsortedIndex([1, 1, 1]); // -> -1  (equal is allowed)
```

## Constraints

- Length up to 1,000,000 — must be O(n), single pass.
- Values can be negative, zero, or positive.

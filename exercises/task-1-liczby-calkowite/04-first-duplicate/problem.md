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
firstDuplicate([2, 1, 3, 5, 3, 2]); // -> 3   (3 repeats at index 4, before 2 repeats at index 5)
firstDuplicate([2, 4, 3, 5, 1]); // -> -1  (all unique)
firstDuplicate([1, 1, 2]); // -> 1
firstDuplicate([5, 5, 5]); // -> 5
```

## Constraints

- Length up to 1,000,000 — must be O(n).
- Values can be negative, zero, or positive.

# Longest Non-Decreasing Run

Given an array of integers, return the length of the **longest contiguous
stretch** in which each element is greater than or equal to the one before
it (`arr[i] >= arr[i - 1]`). A single element is a run of length 1; an
empty array has length 0.

```js
export function longestRun(arr) {
  // ...
}
```

## Examples

```js
longestRun([1, 2, 2, 3, 1, 2]); // -> 4   (1,2,2,3)
longestRun([5, 4, 3, 2]); // -> 1   (every step goes down)
longestRun([1, 2, 3, 4]); // -> 4
longestRun([3, 3, 3]); // -> 3   (equal counts as non-decreasing)
longestRun([]); // -> 0
```

## Constraints

- Length up to 1,000,000 — must be O(n), single pass.
- Numbers can be negative, zero, or positive.

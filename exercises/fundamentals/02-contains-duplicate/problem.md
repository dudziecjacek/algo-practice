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
containsDuplicate([1, 2, 3, 1]); // -> true
containsDuplicate([1, 2, 3, 4]); // -> false
containsDuplicate([]); // -> false
containsDuplicate([2, 2]); // -> true
```

## Constraints

- Length up to 1,000,000 — must be O(n).

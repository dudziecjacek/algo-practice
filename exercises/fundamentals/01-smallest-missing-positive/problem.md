# Smallest Missing Positive Integer

Given an array `A` of `N` integers, return the smallest positive integer
(greater than 0) that does not occur in `A`.

```js
export function smallestMissingPositive(A) {
  // ...
}
```

## Examples

```js
smallestMissingPositive([1, 3, 6, 4, 1, 2]); // -> 5
smallestMissingPositive([1, 2, 3]); // -> 4
smallestMissingPositive([-1, -3]); // -> 1
```

## Constraints

- `N` in `[1..100,000]`; each element in `[-1,000,000..1,000,000]`.

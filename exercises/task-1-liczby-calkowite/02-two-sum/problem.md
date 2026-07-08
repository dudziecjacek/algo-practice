# Two Sum

Given an array of integers `numbers` and a `target`, return the indices
of the two numbers that add up to `target`, as `[i, j]` with `i < j`.
If several pairs sum to `target`, **the first pair to complete wins**:
scanning left to right, return at the first index `j` whose partner has
already been seen — and `i` is the _earliest_ index holding that partner
value. Return `undefined` if no pair exists.

```js
export function twoSum(numbers, target) {
  // ...
}
```

## Examples

```js
twoSum([1, 2, 3], 4); // -> [0, 2]   (1 + 3)
twoSum([3, 2, 4], 6); // -> [1, 2]   (2 + 4)
twoSum([2, 2, 3], 4); // -> [0, 1]
twoSum([1234, 5678, 9012], 14690); // -> [1, 2]
```

## Constraints

- Must be O(n). A nested loop over every pair is O(n²).

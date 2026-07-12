# Permutations

Given an array of **distinct** integers `nums`, return **all** possible
permutations. The permutations must be returned in the order produced by
standard backtracking that considers elements left-to-right (see
examples).

```js
export function permutations(nums) {
  // ...
}
```

## Examples

```js
permutations([1, 2, 3]);
// -> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

permutations([1, 2]); // -> [[1,2],[2,1]]
permutations([1]);    // -> [[1]]
```

## Constraints

- Textbook **backtracking / recursion**: keep a `current` partial
  permutation and a `used` flag per index. At each level, try every
  unused element, recurse, then **undo** (pop + unmark) before trying the
  next.
- There are `n!` permutations, so the output is inherently large — that's
  expected. Push a **copy** of `current` when it's complete, not the live
  array.

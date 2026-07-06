# Two Sum

Given an array of integers `numbers` and a `target`, return the indices
of the two numbers that add up to `target`, as `[i, j]` with `i < j`.
Assume exactly one solution exists.

```js
export function twoSum(numbers, target) {
  // ...
}
```

## Examples

```js
twoSum([1, 2, 3], 4)              // -> [0, 2]   (1 + 3)
twoSum([3, 2, 4], 6)              // -> [1, 2]   (2 + 4)
twoSum([2, 2, 3], 4)              // -> [0, 1]
twoSum([1234, 5678, 9012], 14690) // -> [1, 2]
```

## Constraints

- Must be O(n). A nested loop over every pair is O(n²).

## Pattern / gotcha

Flip the question from "search for the partner" to "have I already seen
`target - x`?" — answered in O(1) with a `Map` of **value → index** (a
plain `Set` can't work here because you must return *where* you saw the
number, not just that you saw it). Check the complement **before**
storing the current number, so you never pair a number with itself and
you return the earliest completing pair.

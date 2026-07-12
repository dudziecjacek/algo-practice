# First Opposite Pair

Given an array of integers. An opposite pair is `x` and `-x`. Scanning the
array from the left, find the first pair that completes — i.e. the first
moment where, for the current number, its opposite has already been seen
earlier. Return the absolute value of that pair (`|x|`), or `-1` if no pair
exists.

```js
export function firstOppositePair(arr) {
  // ...
}
```

## Examples

```js
firstOppositePair([3, 1, -2, 5, -1, 7]); // -> 1
// at index 4, -1 appears; 1 was already seen at index 1 -> |1| = 1

firstOppositePair([4, 2, 6, -6, 1]); // -> 6
firstOppositePair([1, 2, 3, 4]); // -> -1 (no pair)
firstOppositePair([5, -5]); // -> 5
```

## Constraints

- Length up to 1,000,000 — must be O(n), single pass.
- Numbers can be positive, negative, or zero.
- Zero is its own opposite (`-0 === 0`), so `[0, 0]` returns `0`.

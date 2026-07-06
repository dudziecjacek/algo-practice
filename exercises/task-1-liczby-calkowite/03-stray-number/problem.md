# Find the Stray Number

You're given an odd-length array of integers where all numbers are the
same except one. Find and return the different number.

```js
export function stray(numbers) {
  // ...
}
```

## Examples

```js
stray([1, 1, 1, 1, 2, 1, 1]) // -> 2
stray([17, 17, 3, 17, 17])   // -> 3
```

## Pattern / gotcha

A counting approach works (frequency map, return the key with count `1`,
`return` early instead of scanning all keys). The optimal answer is
bitwise XOR — O(n) time, O(1) space, no hash at all: every repeated value
appears an even number of times, and `x ^ x === 0`, `x ^ 0 === x`, so
XOR-ing everything cancels the duplicates and leaves only the stray. This
relies on the "common value appears an even number of times" guarantee;
without it, fall back to counting.

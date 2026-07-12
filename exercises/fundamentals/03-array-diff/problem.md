# Array Diff

Return a new array containing the elements of `a` that do **not** appear
in `b`. Preserve the original order and keep duplicates from `a`.

```js
export function arrayDiff(a, b) {
  // ...
}
```

## Examples

```js
arrayDiff([1, 2, 2, 2, 3], [2]); // -> [1, 3]
arrayDiff([1, 2, 3], []); // -> [1, 2, 3]
arrayDiff([1, 2, 3], [1, 2, 3]); // -> []
arrayDiff([], [1, 2]); // -> []
```

## Constraints

- Both arrays can be large — must be O(a + b), not O(a \* b).

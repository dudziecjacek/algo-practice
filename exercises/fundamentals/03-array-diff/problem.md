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
arrayDiff([1, 2, 2, 2, 3], [2]) // -> [1, 3]
arrayDiff([1, 2, 3], [])        // -> [1, 2, 3]
arrayDiff([1, 2, 3], [1, 2, 3]) // -> []
arrayDiff([], [1, 2])           // -> []
```

## Constraints

- Both arrays can be large — must be O(a + b), not O(a * b).

## Pattern / gotcha

The obvious `a.filter(x => !b.includes(x))` is O(a * b), because
`.includes` re-scans `b` for every element of `a` — a hidden nested loop.
Build a `Set` from `b` **once** (O(b)), then filter `a` with `set.has(x)`
in O(1) per element → O(a + b) overall. Duplicates in `a` are kept
because you test each element independently.

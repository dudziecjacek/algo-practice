# Merge Sort

Return a **new** array with the elements of `nums` sorted ascending,
implemented as **merge sort** — do not call the built-in `.sort()`.

```js
export function mergeSort(nums) {
  // ...
}
```

## Examples

```js
mergeSort([5, 2, 4, 1, 3]); // -> [1, 2, 3, 4, 5]
mergeSort([1]);              // -> [1]
mergeSort([]);              // -> []
```

## Constraints

- **O(n log n)** time. This is the canonical divide-and-conquer shape:
  split in half, sort each half **recursively**, then **merge** the two
  sorted halves in linear time.
- The merge step is where the work happens — walk both halves with two
  pointers, always taking the smaller front element. Use `<=` (not `<`)
  to keep it stable.

# Search in Rotated Sorted Array

An ascending array of **distinct** integers has been rotated at some
unknown pivot (e.g. `[0,1,2,4,5,6,7]` -> `[4,5,6,7,0,1,2]`). Given the
rotated array `nums` and a `target`, return its index, or `-1`.

```js
export function searchRotated(nums, target) {
  // ...
}
```

## Examples

```js
searchRotated([4, 5, 6, 7, 0, 1, 2], 0); // -> 4
searchRotated([4, 5, 6, 7, 0, 1, 2], 3); // -> -1
searchRotated([1], 1);                    // -> 0
```

## Constraints

- Must be **O(log n)** — still binary search, don't just scan.
- The trick: at each `mid`, **one half is always sorted**. Figure out
  which half is sorted (compare `nums[lo]` to `nums[mid]`), then check
  whether `target` falls inside that sorted half to decide which way to
  go.

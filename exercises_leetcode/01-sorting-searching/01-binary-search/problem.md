# Binary Search

Given an array `nums` sorted in **ascending order** and a `target`, return
the index of `target`, or `-1` if it is not present.

```js
export function binarySearch(nums, target) {
  // ...
}
```

## Examples

```js
binarySearch([-1, 0, 3, 5, 9, 12], 9);  // -> 4
binarySearch([-1, 0, 3, 5, 9, 12], 2);  // -> -1
binarySearch([5], 5);                    // -> 0
binarySearch([], 1);                     // -> -1
```

## Constraints

- Must be **O(log n)** — halve the search space each step. A linear scan
  is O(n) and defeats the point.
- Watch the loop bound (`lo <= hi`) and the midpoint (`(lo + hi) >> 1`
  avoids overflow and floors). Off-by-one here is the classic bug.

# Kth Largest Element (Quickselect)

Return the **k-th largest** element in `nums` (1-indexed: `k = 1` is the
maximum). Assume `1 <= k <= nums.length`.

```js
export function kthLargest(nums, k) {
  // ...
}
```

## Examples

```js
kthLargest([3, 2, 1, 5, 6, 4], 2);          // -> 5
kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4); // -> 4
kthLargest([1], 1);                          // -> 1
```

## Constraints

- Sorting works (O(n log n)), but the intended answer is **quickselect**:
  a divide-and-conquer partition that recurses into **only one side**,
  giving **O(n) average** time.
- Partition around a pivot so smaller elements land left; the pivot's
  final index tells you which side the answer is on. The k-th largest is
  the element at sorted index `n - k`.
- Work on a **copy** — partitioning shuffles the array in place.

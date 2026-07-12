# Solution: Search in Rotated Sorted Array

## Intuition

A rotated sorted array like `[4,5,6,7,0,1,2]` isn't fully sorted, but if
you cut it at the middle, **at least one of the two halves is always
still sorted**. If you can tell which half is sorted, you can check
whether the target lies inside that clean, sorted half — and if it does,
search there; otherwise search the other half. Still halving each step →
O(log n).

## Step by step

1. Standard binary-search window: `lo = 0`, `hi = length - 1`.
2. While `lo <= hi`, take `mid`:
   - If `nums[mid] === target` → return `mid`.
   - **Decide which half is sorted** by comparing `nums[lo]` to
     `nums[mid]`:
     - If `nums[lo] <= nums[mid]` → the **left half is sorted**.
       - If `nums[lo] <= target < nums[mid]` → target is in the left half
         → `hi = mid - 1`.
       - Else → go right → `lo = mid + 1`.
     - Otherwise → the **right half is sorted**.
       - If `nums[mid] < target <= nums[hi]` → target is in the right half
         → `lo = mid + 1`.
       - Else → go left → `hi = mid - 1`.
3. Not found → `-1`.

## Why the range checks use the sorted half

You can only reliably say "is the target between these two ends?" when the
segment between them is **sorted**. That's why each branch first
identifies the sorted half, then does the simple `low <= target < high`
containment test against *that* half. The unsorted half is handled by
elimination.

## Complexity

- **Time: O(log n)** — one half is discarded every iteration.
- **Space: O(1)**.

## Edge cases & pitfalls

- `nums[lo] <= nums[mid]` uses **`<=`** so a 1- or 2-element window (where
  `lo === mid`) is treated as "left sorted" correctly.
- Not rotated at all (`[1,2,3,4,5]`) → the left half is always sorted →
  behaves like plain binary search.
- Assumes **distinct** values. Duplicates (e.g. `[2,2,2,0,2]`) break the
  "which half is sorted" test and need an extra O(n)-worst-case tweak.

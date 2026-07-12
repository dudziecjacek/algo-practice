# Solution: Binary Search

## Intuition

The array is **sorted**, so a single comparison tells you which *half* the
target must be in. Look at the middle: if it's too small, the answer can
only be to the right; too big, only to the left. Each check throws away
half the remaining range — that's the O(log n) win.

## Step by step

1. Keep a search window with two pointers: `lo = 0`, `hi = length - 1`.
2. While the window is non-empty (`lo <= hi`):
   - Compute the midpoint `mid = (lo + hi) >> 1` (`>>1` floors the average
     and avoids the classic overflow of `(lo + hi) / 2` on huge indices).
   - If `nums[mid] === target` → found it, return `mid`.
   - If `nums[mid] < target` → the target is bigger, discard the left
     half: `lo = mid + 1`.
   - Else → discard the right half: `hi = mid - 1`.
3. If the window empties, the target isn't present → return `-1`.

## Why the boundaries are the way they are

- **`lo <= hi`, not `lo < hi`.** When `lo === hi` there's still one element
  left to check; `<` would skip it.
- **`mid + 1` / `mid - 1`, not `mid`.** You already compared `mid`, so
  exclude it. Keeping `mid` in the window is the #1 cause of infinite
  loops here.

## Complexity

- **Time: O(log n)** — the window halves every iteration.
- **Space: O(1)** — two pointers, no recursion.

## Edge cases & pitfalls

- Empty array → loop never runs → `-1`. ✅
- Target at the very first/last index → handled by the inclusive bounds.
- Duplicates: this returns *some* valid index, not necessarily the first.
  (Finding the *first* occurrence is a "lower bound" variant — same shape,
  but on a match you record it and keep searching left.)

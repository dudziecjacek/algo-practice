# Solution: Merge Sort

## Intuition

A single element is already sorted. Two sorted lists can be **merged** into
one sorted list in a single linear pass. Put those together: split the
array down to single elements, then merge pairs back up. That's the whole
divide-and-conquer idea.

## Step by step

**`mergeSort(nums)`**

1. **Base case:** length ≤ 1 → return a copy (already sorted).
2. **Divide:** split at the midpoint into `left` and `right`.
3. **Conquer:** `mergeSort` each half recursively.
4. **Combine:** `merge(left, right)` into one sorted array and return it.

**`merge(a, b)`** — both inputs already sorted:

1. Two pointers `i`, `j` at the fronts of `a` and `b`.
2. Repeatedly take the **smaller** front element into the output and
   advance that pointer.
3. When one side runs dry, append whatever remains of the other.

## Why it's O(n log n)

- Each level of recursion splits everything in half → there are **log n**
  levels.
- Across one level, the merges together touch all **n** elements once →
  **O(n) per level**.
- log n levels × O(n) = **O(n log n)**. This holds for *every* input
  (best, average, worst) — merge sort has no bad cases.

## Complexity

- **Time: O(n log n)** always.
- **Space: O(n)** for the merged output buffers (this readable version
  also allocates via `slice`; an index-range version with one shared
  buffer trims constants but is far less readable — fine to mention as the
  "if memory is tight" optimization).

## Good-practice notes

- **Stable sort:** the merge uses `a[i] <= b[j]` (`<=`, not `<`), so equal
  elements keep their original order.
- **Pure:** returns a new array and never mutates the input — easy to
  reason about and test.

## Edge cases

- `[]` and `[x]` hit the base case directly.
- Duplicates and negatives are handled by plain `<=` comparison.

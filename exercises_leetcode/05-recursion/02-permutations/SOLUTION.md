# Solution: Permutations

## Intuition

Build each permutation position by position. At each position you may place
any number you **haven't used yet**. Try one, recurse to fill the rest,
then **undo** it and try the next. That try → recurse → undo loop is
**backtracking** — a depth-first walk over the tree of all arrangements.

## Step by step

1. Keep three pieces of state:
   - `current` — the permutation being built.
   - `used[]` — which indices are already placed.
   - `result` — completed permutations.
2. `backtrack()`:
   - **Base case:** `current.length === nums.length` → push a **copy** of
     `current` into `result` and return.
   - Otherwise, for each index `i`:
     - Skip if `used[i]`.
     - Mark `used[i] = true`, `current.push(nums[i])`.
     - Recurse.
     - **Undo:** `current.pop()`, `used[i] = false` — so the next
       iteration starts from a clean slate.

## Why push a *copy*

`current` is one mutable array reused across the whole search. If you push
`current` itself, every entry in `result` ends up pointing at the same
(eventually empty) array. `current.slice()` snapshots it at completion.

## Complexity

- **Time: O(n × n!)** — there are `n!` permutations and copying each
  completed one costs O(n). This is optimal: the output alone has that
  size.
- **Space: O(n)** for `current`/`used`/recursion depth (excluding the
  output).

## Edge cases & pitfalls

- `[]` → one permutation, the empty one → `[[]]`.
- Assumes **distinct** inputs. With duplicates you'd sort first and skip
  repeated choices at the same level to avoid duplicate permutations.
- Forgetting the undo step is the classic bug — state leaks into sibling
  branches.

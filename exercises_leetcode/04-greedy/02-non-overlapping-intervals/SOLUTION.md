# Solution: Non-Overlapping Intervals

## Intuition

To remove the **fewest** intervals so the rest don't overlap, flip it
around: **keep the most** non-overlapping intervals, and remove whatever's
left. The greedy rule for keeping the most is: always keep the interval
that **ends earliest**, because finishing sooner leaves the most room for
everything after it.

## Step by step

1. **Sort by end time** (`a[1] - b[1]`) on a copy of the input.
2. Track the `end` of the last interval you decided to keep (start with
   the first interval's end).
3. Sweep the rest:
   - If the next interval **starts before** `end` → it overlaps → remove
     it (`removed++`), and keep the earlier-ending one (don't move `end`).
   - Else → no overlap → keep it, advance `end` to this interval's end.
4. Return `removed`.

```js
const sorted = [...intervals].sort((a, b) => a[1] - b[1]);
let removed = 0, end = sorted[0][1];
for (let i = 1; i < sorted.length; i++) {
  if (sorted[i][0] < end) removed++;
  else end = sorted[i][1];
}
```

## Why "earliest end" is the right greedy

Among any set of mutually overlapping intervals, the one that ends first
can always be part of an optimal solution — it "uses up" the least of the
timeline. Keeping a later-ending interval instead could only block more
future intervals, never fewer. This exchange argument is what makes the
greedy provably optimal.

## Complexity

- **Time: O(n log n)** — dominated by the sort; the sweep is O(n).
- **Space: O(n)** for the sorted copy (O(1) if you're allowed to sort in
  place).

## Edge cases & pitfalls

- Touching endpoints (`[1,2]` and `[2,3]`) **don't** overlap → the test is
  `start < end`, not `start <= end`.
- Empty input → `0`.
- Sorting by **start** time instead of end is the classic wrong turn — it
  breaks the greedy argument.
- Don't mutate the caller's array; sort a copy.

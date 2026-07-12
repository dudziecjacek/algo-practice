# LeetCode-style Prep — Assessment #2

Practice for the **second** assessment: a coding/algorithms interview
(whiteboard or shared doc — no IDE). The brief asks you to be comfortable
with sorting/searching, divide-and-conquer, dynamic programming, greedy,
recursion, and the core data structures (trees, linked lists, stacks,
queues, maps, sets), and to describe every solution in **Big-O**.

These folders cover the areas that the first assessment (`../exercises`)
**did not** already train. Things like hash sets/maps, plain stacks, and
basic array + min/max work are already covered there — start with the
areas below instead.

## How to practice

Each section folder has an **`ELI5.md`** (plain-English theory — read it
first), plus **2 exercises**. Each exercise folder has:

- `problem.md` — the task + the technique and the Big-O target it trains.
- `practice.js` — **empty stub — write your solution here.**
- `solution.js` — reference answer (peek only when stuck).
- `SOLUTION.md` — step-by-step walkthrough: intuition, the algorithm,
  why it's efficient, complexity, and the common pitfalls.
- `*.test.js` — the tests (includes a "stays fast" case per exercise).

```bash
npm test           # runs the tests against YOUR practice.js (red until you solve them)
npm run test:watch # re-runs as you type — the training loop
npm run verify     # runs the tests against the reference solution.js (all green)
```

> Tip: for each solution, say the Big-O out loud (time **and** space) —
> that's explicitly graded in this interview.

## Areas (mapped to the brief)

Each links to its ELI5 theory; the two exercises are listed under it.

### [1 — Sorting & Searching](01-sorting-searching/ELI5.md)
Binary search and where sorting-first pays off.
- Binary Search (O(log n)) · Search in Rotated Sorted Array

### [2 — Divide & Conquer](02-divide-and-conquer/ELI5.md)
Split, recurse, combine.
- Merge Sort · Kth Largest (Quickselect, O(n) avg)

### [3 — Dynamic Programming / Memoization](03-dynamic-programming/ELI5.md)
Solve each sub-problem once, reuse the answer.
- Climbing Stairs (1D) · Coin Change (unbounded)

### [4 — Greedy](04-greedy/ELI5.md)
Take the best local move — when it's provably safe.
- Jump Game (reachability) · Non-Overlapping Intervals (scheduling)

### [5 — Recursion & Backtracking](05-recursion/ELI5.md)
Base case + recurse + undo.
- Power (x^n, fast exponentiation) · Permutations (backtracking)

### [6 — Trees & Binary Trees](06-trees/ELI5.md)
Node shape `{ val, left, right }`; recursion's natural home.
- Maximum Depth (DFS) · Validate BST (range recursion)

### [7 — Linked Lists](07-linked-lists/ELI5.md)
Node shape `{ val, next }`; careful pointer juggling.
- Reverse a List · Cycle Detection (Floyd's tortoise & hare)

### [8 — Queues](08-queues/ELI5.md)
FIFO, BFS, and the monotonic deque.
- Sliding Window Maximum (deque) · Shortest Path in a Grid (BFS)

### [9 — LRU Cache](09-lru-cache/ELI5.md)
Design question — O(1) get/put with two structures working together.
- LRU via `Map` (the JS shortcut) · LRU from scratch (hashmap + doubly
  linked list) · **LRU Cache (LeetCode 146)** — the flagship problem with
  the exact LeetCode operations-array test format

## The recurring theme

Where the first assessment was all about *avoiding accidental O(n²)*, this
set is about **picking the right tool for the shape of the problem**:
sorted input → binary search; "fewest/longest/count of ways" → DP;
"is it reachable / minimum removals" → greedy; "all combinations" →
backtracking; "shortest in an unweighted grid" → BFS; "O(1) cache with
eviction" → hashmap + linked list. Name the pattern, then name its Big-O.

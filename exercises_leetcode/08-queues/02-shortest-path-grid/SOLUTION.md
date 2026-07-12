# Solution: Shortest Path in a Grid (BFS)

## Intuition

On an **unweighted** grid every step costs the same, so the shortest path
is found by exploring outward in rings: all cells 1 step away, then all
2 steps away, and so on. The **first** time you touch the target, you got
there in the fewest steps. Exploring in arrival order is exactly what a
**queue** (BFS) gives you.

## Step by step

1. Guard: empty grid, or start/end is a wall (`1`) → return `-1`.
2. Start with the queue holding `(0,0)`; mark it visited; `steps = 1`
   (the start cell counts as one cell of the path).
3. Process the queue **one level at a time**:
   - For every cell in the current level:
     - If it's the bottom-right target → return `steps`.
     - For each of the 4 neighbors (up/down/left/right): if it's in
       bounds, open (`0`), and unvisited → mark visited and add it to the
       **next** level.
   - Replace the queue with the next level; `steps++`.
4. Queue empties without reaching the target → `-1`.

## Two details that keep it correct and fast

- **Mark visited when you *enqueue*, not when you dequeue.** Otherwise the
  same cell can be added to the queue many times before it's processed,
  blowing up the work.
- **Level-by-level** processing (swapping in a fresh `next` array) tracks
  the distance cleanly and avoids `Array.shift()`, which is O(n) per call
  in JS.

## Complexity

- **Time: O(rows × cols)** — each cell is enqueued/visited at most once,
  and each does O(1) work (4 neighbors).
- **Space: O(rows × cols)** for the `visited` matrix and the queue.

## Edge cases & pitfalls

- Start or end blocked → `-1` up front.
- Single open cell `[[0]]` → start *is* the target → `1`.
- Walls forcing a detour are handled naturally by BFS exploring all routes
  in parallel.
- This is 4-directional. Allowing diagonals (8-directional) is a one-line
  change to the `dirs` list.

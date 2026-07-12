# Shortest Path in a Grid (BFS)

Given a `grid` of `0`s (open cells) and `1`s (walls), find the length of
the **shortest path** from the top-left cell `(0,0)` to the bottom-right
cell, moving only **up/down/left/right** through open cells. The length is
the **number of cells visited** along the path (including both ends).
Return `-1` if no path exists (including when the start or end is a wall).

```js
export function shortestPath(grid) {
  // ...
}
```

## Examples

```js
shortestPath([[0, 0, 0], [0, 1, 0], [0, 0, 0]]); // -> 5
shortestPath([[0, 1], [1, 0]]);                   // -> -1
shortestPath([[0]]);                              // -> 1
```

## Constraints

- On an **unweighted** grid, the shortest path comes from **BFS** — and
  BFS runs on a **queue**. Expand outward level by level from the start;
  the first time you reach the target, the current level count is the
  answer.
- Mark cells **visited** as you enqueue them (not when you dequeue) so you
  never queue the same cell twice. Time **O(rows × cols)**.

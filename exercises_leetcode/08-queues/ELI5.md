# ELI5: Queues

## A line at the ticket counter

A **queue** is a line: the **first person in is the first person out**
(FIFO). You join at the back, you're served from the front. No cutting.

(Contrast with a **stack**, which is a pile of plates: last one on is the
first one off — LIFO. You already practiced stacks in the first
assessment.)

Two operations, both **O(1)**:

- **enqueue** — add to the back.
- **dequeue** — remove from the front.

## Why queues matter: fairness and "levels"

Because a queue serves things in the exact order they arrived, it's how
you explore **level by level** or **step by step**.

- **BFS (breadth-first search):** to find the *shortest* number of steps
  in a maze/grid/graph, spread outward like ripples in a pond. Put the
  start in the queue; repeatedly dequeue a cell and enqueue its unvisited
  neighbors. The **first time** you reach the goal, you got there in the
  fewest steps — guaranteed, because you explored all 1-step places before
  any 2-step place. Mark cells visited **when you enqueue** them so you
  never add the same one twice. O(number of cells).

## The fancy cousin: monotonic deque

A **deque** ("deck") is a double-ended queue — you can add/remove at
**both** ends. A **monotonic deque** keeps its contents sorted so the best
answer is always at the front.

That's the trick for **sliding window maximum**: as the window slides,
kick out values from the back that are smaller than the newcomer (they can
never be the max again), and drop the front if it slid out of the window.
The front is always the current window's max — turning an O(n·k) scan into
**O(n)**.

**When you see:** "shortest path / fewest steps" (BFS), "process in
arrival order," "level by level," or "max/min in every sliding window"
(deque) → think queue.

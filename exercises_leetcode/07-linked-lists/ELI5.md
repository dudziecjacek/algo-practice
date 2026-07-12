# ELI5: Linked Lists

## A treasure hunt of clues

An array is like numbered lockers in a row — jump straight to locker #500.
A **linked list** is a treasure hunt: each clue holds a value **and tells
you where the next clue is**. To reach the 500th clue you must follow all
499 before it.

A node is just:

```js
{ val, next } // next points to the next node, or null at the end
```

- **Strength:** inserting or removing in the middle is cheap — you only
  re-point a couple of arrows, no shifting everything over like an array.
- **Weakness:** no random access. Finding the k-th item is O(k); you must
  walk.

## The one skill: pointer juggling

Almost every linked-list problem is about carefully re-wiring `next`
pointers **without losing the rest of the list.**

- **Reverse a list:** walk along flipping each arrow to point backward.
  The must-remember trick: **save `next` before you overwrite it**,
  otherwise you drop everything after the current node.
- **Dummy/sentinel head:** a fake node before the real head so "insert at
  the front" isn't a special case. Great for merging or deleting.

## Two-pointer / "fast & slow"

Run two walkers at different speeds. The famous one is **cycle detection**
(Floyd's tortoise & hare): a slow pointer steps 1, a fast pointer steps 2.

- No loop → fast reaches the end.
- There's a loop → fast keeps lapping the track and *eventually catches*
  slow, like runners on a circular track. They meet ⇒ there's a cycle.

This gives O(n) time with **O(1) memory** (no visited-set needed).

**When you see:** `{ val, next }`, "reverse/merge/reorder a list,"
"detect a loop," "find the middle/k-th-from-end" → linked-list pointer
work.

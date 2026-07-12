# LRU Cache — hashmap + doubly linked list (from scratch)

Same LRU cache as the previous exercise, but build the ordering
**yourself** — do **not** rely on `Map` insertion order. This is the
version interviewers usually want to see, because it shows you understand
*why* O(1) is possible.

```js
export class LRUCache {
  constructor(capacity) {}
  get(key) {}        // return the value, or -1 if absent
  put(key, value) {} // insert/update; evict LRU when over capacity
}
```

## Example

```js
const c = new LRUCache(2);
c.put(1, 1);
c.put(2, 2);
c.get(1);    // -> 1
c.put(3, 3); // evicts key 2
c.get(2);    // -> -1
c.put(4, 4); // evicts key 1
c.get(1);    // -> -1
c.get(3);    // -> 3
c.get(4);    // -> 4
```

## Constraints — the two-data-structure trick

To get **O(1)** for both operations you need two things at once:

1. **A hashmap** `key -> node` so you can *find* any entry instantly.
2. **A doubly linked list** of nodes so you can *reorder* (move to
   most-recent) and *evict* (drop least-recent) instantly — both are just
   pointer swaps.

Keep two **sentinel** nodes, `head` (most-recent side) and `tail`
(least-recent side), so you never special-case the ends:

- `get(key)`: look up the node, unlink it, re-insert right after `head`,
  return its value.
- `put(key, value)`: if it exists, update + move to front; otherwise
  create a node, add after `head`, store in the map. If size >
  `capacity`, remove the node before `tail` (the LRU) and delete it from
  the map.

A `Map`/plain object alone can find fast but can't reorder in O(1); a list
alone can reorder fast but can't find in O(1). You need both.

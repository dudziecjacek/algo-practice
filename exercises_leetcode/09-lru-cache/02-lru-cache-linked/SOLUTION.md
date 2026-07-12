# Solution: LRU Cache — hashmap + doubly linked list

## Intuition

Two requirements pull in opposite directions:

- **Find any key instantly** → wants a hashmap.
- **Reorder / evict instantly** → wants a linked list.

Neither alone does both in O(1). So use **both together**: a hashmap maps
`key → node`, and the nodes live in a **doubly linked list** ordered by
recency. The hashmap finds the node; the list moves or drops it — each in
O(1) because it's just pointer surgery.

## The structure

- A doubly linked list with two **sentinel** nodes, `head` and `tail`, so
  the real nodes always sit strictly between them (no null-edge special
  cases).
- Convention: **right after `head` = most recently used**; **right before
  `tail` = least recently used**.
- Two helpers:
  - `_remove(node)` — splice a node out: `node.prev.next = node.next` and
    `node.next.prev = node.prev`.
  - `_addFront(node)` — insert a node right after `head`.

## Step by step

**`get(key)`**

1. Look the node up in the map; miss → `-1`.
2. `_remove(node)` then `_addFront(node)` → it's now most recent.
3. Return `node.value`.

**`put(key, value)`**

1. If the key exists: update its `value`, `_remove` + `_addFront` to
   refresh recency, done.
2. Otherwise: create a node, add it to the map, `_addFront` it.
3. If `map.size > capacity`: the LRU node is `tail.prev`. `_remove` it and
   `map.delete(lru.key)`.

> Storing `key` **inside** each node is what makes eviction O(1): when you
> drop `tail.prev`, you need its key to also remove it from the map.

## Why every operation is O(1)

Map lookup/insert/delete are O(1) average. Every list operation
(`_remove`, `_addFront`, reading `tail.prev`) touches a fixed number of
pointers — no traversal, no shifting. Sentinels remove all the "is this
the head/tail?" branching.

## Complexity

- **Time: O(1)** for both `get` and `put`.
- **Space: O(capacity)** — one node + one map entry per stored key.

## Edge cases & pitfalls

- Sentinels are the trick to avoid null checks — initialize
  `head.next = tail` and `tail.prev = head` in the constructor.
- On `put` of an existing key, don't create a second node — update and move
  the existing one.
- Evict **after** inserting, and only when strictly over capacity.
- `get` refreshes recency too, not only `put`.

# Solution: LRU Cache — the `Map` approach

## Intuition

An LRU cache needs to know, at all times, which key was used least
recently. A JavaScript `Map` already tracks **insertion order** and lets
you iterate keys from oldest-inserted to newest. So treat that order as
recency: the **first** key is the least recently used, the **last** is the
most recently used. "Using" a key just means moving it to the end.

## Step by step

**`get(key)`**

1. If the key isn't present → return `-1`.
2. Otherwise read its value, `delete` the key, then `set` it again. The
   re-insert moves it to the **end** (most recent). Return the value.

**`put(key, value)`**

1. If the key already exists, `delete` it first (so the re-insert refreshes
   its position instead of leaving it in place).
2. `set(key, value)` — now it's at the end (most recent).
3. If `map.size > capacity`, the least recently used key is the **first**
   one: `map.keys().next().value`. Delete it.

```js
get(key) {
  if (!this.map.has(key)) return -1;
  const v = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, v);   // move to most-recent end
  return v;
}
```

## Why every operation is O(1)

`Map`'s `has`, `get`, `set`, and `delete` are all average O(1), and
`map.keys().next()` grabs the first key in O(1) without scanning. The
delete-then-set trick reorders in O(1) — no shifting.

## Complexity

- **Time: O(1)** average for both `get` and `put`.
- **Space: O(capacity)** — at most `capacity` entries are ever stored.

## Edge cases & pitfalls

- **`get` counts as a use** — refreshing recency on reads (not just writes)
  is the rule people forget.
- Updating an existing key must **also** refresh recency — hence the
  `delete` before `set` in `put`.
- `capacity` of 1 → every new distinct key evicts the previous one.
- This leans on a JS-specific guarantee (`Map` iteration order). It's a
  great pragmatic answer, but be ready to explain the from-scratch version
  (next exercise) — that's what proves you understand *why* it's O(1).

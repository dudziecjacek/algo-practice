# Solution: LRU Cache (LeetCode 146)

This solution uses a **single JavaScript `Map`**. A `Map` remembers the
**order keys were inserted**, so we can treat that order as *recency*: the
**first** key in iteration is the least recently used (LRU), the **last**
is the most recently used (MRU). "Using" a key just means moving it to the
end.

(The language-agnostic interview answer — a hashmap + doubly linked list —
lives in the sibling exercise
[`02-lru-cache-linked`](../02-lru-cache-linked/SOLUTION.md). This `Map`
version is the concise, idiomatic-JS way to get the same O(1) behavior.)

## `get(key)`

```js
get(key) {
  if (this.map.has(key)) {
    let val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);   // re-insert -> now the most-recent entry
    return val;
  } else {
    return -1;
  }
}
```

1. If the key isn't present → return `-1`.
2. If it is: read the value, **delete** it, then **set** it again. A fresh
   `set` appends to the end of the `Map`'s order, so the key becomes the
   MRU. Return the value.

The `delete` + `set` pair is how you "move to the end" — a `Map` has no
direct reorder operation, but removing and re-adding achieves it in O(1).

## `put(key, val)`

```js
put(key, val) {
  if (this.get(key) === -1) {          // key is absent
    if (this.capacity === this.map.size) {  // ...and cache is full
      for (let keyVal of this.map) {
        this.map.delete(keyVal[0]);    // first entry = LRU -> evict it
        break;
      }
    }
  }
  this.map.set(key, val);
}
```

The clever part is **reusing `get` inside `put`**:

- If the key **already exists**, `this.get(key)` returns its value (not
  `-1`) **and** refreshes its recency as a side effect. We then skip
  eviction and let the final `map.set(key, val)` overwrite the value in
  place (position unchanged — it's already at the end).
- If the key is **absent**, `get` returns `-1`. If the cache is at
  capacity, we evict the LRU entry: iterate the `Map` and delete the
  **first** key (`keyVal[0]`), then `break` immediately. The final
  `map.set` then adds the new key at the end.

### Why `for … of … break` for eviction

Iterating a `Map` yields `[key, value]` pairs in insertion order, so the
**first** one is the oldest = LRU. We only need that one, hence the
immediate `break`. It's O(1) — the loop never runs a second iteration.
(`this.map.keys().next().value` is an equivalent one-liner for the same
thing.)

## Why every operation is O(1)

`Map`'s `has`, `get`, `set`, and `delete` are all O(1) average. The
eviction loop reads exactly one entry before breaking. So both `get` and
`put` are **O(1) average**, which comfortably handles the constraint of up
to `2 * 10^5` calls.

## Complexity

- **Time: O(1) average** per `get` and `put`.
- **Space: O(capacity)** — at most `capacity` entries are stored (eviction
  runs *before* the insert whenever we're full and adding a new key, so the
  size never exceeds `capacity`).

## Edge cases & pitfalls (the ones LeetCode checks)

- **`key` and `value` can be `0`.** Presence is tested with
  `this.map.has(key)` and the stored value is returned directly, so a
  legitimately stored `0` is never mistaken for "missing". Avoid falsy
  checks like `if (!val)` — they'd break on `0`.
- **`get` refreshes recency**, so calling it also counts as *using* the key
  — exactly what we want, and what makes reusing it inside `put` correct.
- **Updating an existing key doesn't grow the size:** `get` moves it to the
  end, and the trailing `set` just overwrites the value.
- **Evict before inserting** when full, and only when
  `capacity === map.size` — so the size caps out at `capacity`, never
  above.
- This relies on the JS guarantee that `Map` preserves insertion order. Be
  ready to explain the hashmap + doubly-linked-list version if an
  interviewer wants a language-neutral design.

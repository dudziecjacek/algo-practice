# LRU Cache — the `Map` approach

Design a **Least Recently Used (LRU) cache** with a fixed `capacity`.

```js
export class LRUCache {
  constructor(capacity) {}
  get(key) {}        // return the value, or -1 if the key is absent
  put(key, value) {} // insert/update; if over capacity, evict the LRU entry
}
```

Both `get` and `put` count as **using** a key (they make it the *most*
recently used). When a `put` pushes the cache past `capacity`, evict the
**least recently used** key first.

## Example

```js
const c = new LRUCache(2);
c.put(1, 1);
c.put(2, 2);
c.get(1);    // -> 1        (now 1 is most-recent, 2 is least-recent)
c.put(3, 3); // evicts key 2
c.get(2);    // -> -1       (2 was evicted)
c.put(4, 4); // evicts key 1
c.get(1);    // -> -1
c.get(3);    // -> 3
c.get(4);    // -> 4
```

## Constraints

- Both operations must be **O(1)** on average.
- **The trick:** a JavaScript `Map` remembers **insertion order**. Treat
  the front of that order as "least recently used" and the back as "most
  recently used":
  - On `get`/`put` of an existing key: `delete` it then `set` it again so
    it moves to the back (most recent).
  - On overflow: the first key from `map.keys().next().value` is the LRU —
    delete it.
- This is the pragmatic interview answer in JS. The next exercise builds
  the same thing **from scratch** with a hashmap + doubly linked list —
  which is what interviewers often want to see you reason through.

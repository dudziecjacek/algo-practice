# LRU Cache (LeetCode 146)

Design a data structure that follows the constraints of a **Least Recently
Used (LRU) cache**.

Implement the `LRUCache` class:

- `LRUCache(capacity)` — initialize the cache with positive size
  `capacity`.
- `get(key)` — return the value of `key` if it exists, otherwise return
  `-1`.
- `put(key, value)` — update the value of `key` if it exists; otherwise add
  the `key`-`value` pair. If the number of keys **exceeds** `capacity`
  after this operation, **evict the least recently used** key.

Both `get` and `put` must run in **O(1) average** time.

```js
export class LRUCache {
  constructor(capacity) {}
  get(key) {}        // -> number (value, or -1)
  put(key, value) {} // -> void
}
```

> The original starter signature is TypeScript
> (`get(key: number): number`, `put(key: number, value: number): void`).
> This repo is JavaScript, so the types are dropped — the behavior is
> identical.

## Example 1

```
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

Output
[null, null, null, 1, null, -1, null, -1, 3, 4]
```

```js
const c = new LRUCache(2);
c.put(1, 1);      // cache is {1=1}
c.put(2, 2);      // cache is {1=1, 2=2}
c.get(1);         // return 1
c.put(3, 3);      // LRU key was 2, evict 2 -> cache is {1=1, 3=3}
c.get(2);         // return -1 (not found)
c.put(4, 4);      // LRU key was 1, evict 1 -> cache is {4=4, 3=3}
c.get(1);         // return -1 (not found)
c.get(3);         // return 3
c.get(4);         // return 4
```

## Constraints

- `1 <= capacity <= 3000`
- `0 <= key <= 10^4`
- `0 <= value <= 10^5`
- At most `2 * 10^5` calls will be made to `get` and `put`.

## Notes

- Remember: **both** `get` and `put` count as *using* a key (they make it
  most-recently-used). Eviction removes whatever was used longest ago.
- `key` can be `0`, so test presence by whether the entry exists, not by
  whether a value is falsy.
- This is the flagship version of the problem. If you want to study the two
  standard implementations in isolation, see the sibling exercises:
  [`01-lru-cache-map`](../01-lru-cache-map/) (the JS `Map` shortcut) and
  [`02-lru-cache-linked`](../02-lru-cache-linked/) (hashmap + doubly linked
  list, from scratch).

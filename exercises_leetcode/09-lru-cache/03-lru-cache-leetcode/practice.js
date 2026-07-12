// Your turn. Implement the class, then run `npm test` (or `npm run test:watch`).
// Stuck? The reference answer is in ./solution.js
//
// Both get and put must be O(1) average time.
// TS signature for reference:
//   constructor(capacity: number)
//   get(key: number): number      // value, or -1 if absent
//   put(key: number, value: number): void

export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (this.map.has(key)) {
      let val = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, val); // re-insert -> moves to the most-recent end
      return val;
    } else {
      return -1;
    }
  }

  put(key, val) {
    // get() returns -1 only when the key is absent; when present it also
    // refreshes the key's recency, so we get both jobs done in one call.
    if (this.get(key) === -1) {
      if (this.capacity === this.map.size) {
        for (let keyVal of this.map) {
          this.map.delete(keyVal[0]); // first entry = least recently used
          break;
        }
      }
    }

    this.map.set(key, val);
  }
}

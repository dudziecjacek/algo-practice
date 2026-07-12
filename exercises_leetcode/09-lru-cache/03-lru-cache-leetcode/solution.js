// O(1) LRU using a single JS Map, which preserves insertion order.
// Order = recency: the first key in iteration is the least recently used,
// the last is the most recently used.
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

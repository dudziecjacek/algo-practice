export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // insertion order = recency: front = LRU, back = MRU
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value); // re-insert -> moves to the back (most recent)
    return value;
  }

  put(key, value) {
    if (this.map.has(key)) this.map.delete(key); // will re-add at the back
    this.map.set(key, value);

    if (this.map.size > this.capacity) {
      const lruKey = this.map.keys().next().value; // first key = least recent
      this.map.delete(lruKey);
    }
  }
}

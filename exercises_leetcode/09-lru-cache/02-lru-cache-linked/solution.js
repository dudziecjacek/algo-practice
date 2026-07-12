export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key -> node

    // sentinel nodes: head side = most recent, tail side = least recent
    this.head = { key: null, value: null, prev: null, next: null };
    this.tail = { key: null, value: null, prev: null, next: null };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _addFront(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    const node = this.map.get(key);
    if (node === undefined) return -1;
    this._remove(node);
    this._addFront(node); // mark most recently used
    return node.value;
  }

  put(key, value) {
    const existing = this.map.get(key);
    if (existing !== undefined) {
      existing.value = value;
      this._remove(existing);
      this._addFront(existing);
      return;
    }

    const node = { key, value, prev: null, next: null };
    this.map.set(key, node);
    this._addFront(node);

    if (this.map.size > this.capacity) {
      const lru = this.tail.prev; // node just before the tail sentinel
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}

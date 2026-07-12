import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { LRUCache } = process.env.REF ? solution : practice;

describe("LRU Cache (hashmap + doubly linked list)", () => {
  it("fixed tests (the classic sequence)", () => {
    const c = new LRUCache(2);
    c.put(1, 1);
    c.put(2, 2);
    expect(c.get(1)).toBe(1);
    c.put(3, 3); // evicts 2
    expect(c.get(2)).toBe(-1);
    c.put(4, 4); // evicts 1
    expect(c.get(1)).toBe(-1);
    expect(c.get(3)).toBe(3);
    expect(c.get(4)).toBe(4);
  });

  it("updating an existing key refreshes its recency", () => {
    const c = new LRUCache(2);
    c.put(1, 1);
    c.put(2, 2);
    c.put(1, 10); // update 1 -> 1 becomes most-recent
    c.put(3, 3); // evicts 2 (the LRU), not 1
    expect(c.get(2)).toBe(-1);
    expect(c.get(1)).toBe(10);
    expect(c.get(3)).toBe(3);
  });

  it("get refreshes recency (not just put)", () => {
    const c = new LRUCache(2);
    c.put(1, 1);
    c.put(2, 2);
    expect(c.get(1)).toBe(1); // touch 1 -> 2 is now LRU
    c.put(3, 3); // evicts 2
    expect(c.get(1)).toBe(1);
    expect(c.get(2)).toBe(-1);
  });

  it("capacity of 1 evicts on every new key", () => {
    const c = new LRUCache(1);
    c.put(1, 1);
    c.put(2, 2); // evicts 1
    expect(c.get(1)).toBe(-1);
    expect(c.get(2)).toBe(2);
  });

  it("matches a reference LRU over a long random workload", () => {
    // brute-force reference: array acting as a recency list
    class RefLRU {
      constructor(cap) {
        this.cap = cap;
        this.store = new Map();
        this.order = []; // order[0] = LRU
      }
      _touch(k) {
        const i = this.order.indexOf(k);
        if (i !== -1) this.order.splice(i, 1);
        this.order.push(k);
      }
      get(k) {
        if (!this.store.has(k)) return -1;
        this._touch(k);
        return this.store.get(k);
      }
      put(k, v) {
        this.store.set(k, v);
        this._touch(k);
        if (this.store.size > this.cap) {
          const lru = this.order.shift();
          this.store.delete(lru);
        }
      }
    }

    const cap = 8;
    const c = new LRUCache(cap);
    const ref = new RefLRU(cap);
    let seed = 12345;
    const rand = (m) => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % m;

    for (let step = 0; step < 20000; step++) {
      const key = rand(20);
      if (rand(2) === 0) {
        expect(c.get(key)).toBe(ref.get(key));
      } else {
        const val = rand(1000);
        c.put(key, val);
        ref.put(key, val);
      }
    }
  });

  it("stays O(1) across many operations", () => {
    const n = 1_000_000;
    const c = new LRUCache(1000);
    for (let i = 0; i < n; i++) c.put(i, i);
    expect(c.get(n - 1)).toBe(n - 1);
    expect(c.get(n - 1000)).toBe(n - 1000);
    expect(c.get(n - 1001)).toBe(-1);
    expect(c.get(0)).toBe(-1);
  });
});

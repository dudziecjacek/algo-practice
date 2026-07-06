import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { firstUnsortedIndex } = process.env.REF ? solution : practice;

describe("First Unsorted Index", () => {
  it("fixed tests", () => {
    expect(firstUnsortedIndex([1, 2, 3, 2, 5])).toBe(3);
    expect(firstUnsortedIndex([1, 2, 3, 4])).toBe(-1);
    expect(firstUnsortedIndex([5, 4, 3])).toBe(1);
    expect(firstUnsortedIndex([1, 1, 1])).toBe(-1);
  });

  it("edge cases", () => {
    expect(firstUnsortedIndex([])).toBe(-1);
    expect(firstUnsortedIndex([7])).toBe(-1);
    expect(firstUnsortedIndex([2, 1])).toBe(1); // breaks immediately
    expect(firstUnsortedIndex([-3, -1, 0, -5])).toBe(3); // negatives
    expect(firstUnsortedIndex([1, 2, 2, 3])).toBe(-1); // equals are fine
  });

  it(
    "stays fast on 1M elements (re-checking a slice/prefix per index is O(n^2) and would time out)",
    () => {
      const n = 1_000_000;
      const sorted = Array.from({ length: n }, (_, i) => i);
      expect(firstUnsortedIndex(sorted)).toBe(-1); // forces a full scan
      const dipAtEnd = Array.from({ length: n }, (_, i) => i);
      dipAtEnd[n - 1] = -1;
      expect(firstUnsortedIndex(dipAtEnd)).toBe(n - 1);
    },
    2000
  );
});

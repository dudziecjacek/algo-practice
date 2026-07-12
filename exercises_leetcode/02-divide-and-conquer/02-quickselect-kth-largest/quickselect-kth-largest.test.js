import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { kthLargest } = process.env.REF ? solution : practice;

describe("Kth Largest Element (Quickselect)", () => {
  it("fixed tests", () => {
    expect(kthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    expect(kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
    expect(kthLargest([1], 1)).toBe(1);
  });

  it("edge cases", () => {
    expect(kthLargest([7, 7, 7], 2)).toBe(7); // all equal
    expect(kthLargest([2, 1], 1)).toBe(2); // max
    expect(kthLargest([2, 1], 2)).toBe(1); // min
    expect(kthLargest([-1, -5, -3], 1)).toBe(-1); // negatives, largest
  });

  it("matches a full sort on a large array", () => {
    const n = 200_000;
    const arr = Array.from({ length: n }, (_, i) => (i * 2654435761) % n);
    const sorted = [...arr].sort((a, b) => a - b);
    for (const k of [1, 2, 100, n / 2, n]) {
      expect(kthLargest(arr, k)).toBe(sorted[n - k]);
    }
  });
});

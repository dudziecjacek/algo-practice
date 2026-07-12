import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { searchRotated } = process.env.REF ? solution : practice;

describe("Search in Rotated Sorted Array", () => {
  it("fixed tests", () => {
    expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    expect(searchRotated([1], 1)).toBe(0);
  });

  it("edge cases", () => {
    expect(searchRotated([1], 0)).toBe(-1);
    expect(searchRotated([5, 1, 3], 5)).toBe(0); // pivot at start
    expect(searchRotated([1, 2, 3, 4, 5], 4)).toBe(3); // not rotated
    expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6); // last element
    expect(searchRotated([], 1)).toBe(-1);
  });

  it("stays fast on large inputs", () => {
    const n = 1_000_000;
    // build 0..n-1 rotated by n/2: [n/2 .. n-1, 0 .. n/2-1]
    const k = n / 2;
    const arr = Array.from({ length: n }, (_, i) => (i + k) % n);
    expect(searchRotated(arr, 3)).toBe((3 - k + n) % n);
    expect(searchRotated(arr, k)).toBe(0);
  });
});

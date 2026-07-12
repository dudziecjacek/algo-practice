import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { binarySearch } = process.env.REF ? solution : practice;

describe("Binary Search", () => {
  it("fixed tests", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
    expect(binarySearch([5], 5)).toBe(0);
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("edge cases", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0); // first
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4); // last
    expect(binarySearch([1, 3], 2)).toBe(-1); // between
    expect(binarySearch([2, 2, 2], 2)).toBeGreaterThanOrEqual(0); // any valid index
  });

  it("stays fast on large inputs", () => {
    const n = 1_000_000;
    const arr = Array.from({ length: n }, (_, i) => i * 2); // even numbers
    expect(binarySearch(arr, 999_998)).toBe(499_999);
    expect(binarySearch(arr, 999_999)).toBe(-1); // odd -> absent
  });
});

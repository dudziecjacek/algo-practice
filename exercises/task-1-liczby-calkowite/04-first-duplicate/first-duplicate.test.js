import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { firstDuplicate } = process.env.REF ? solution : practice;

describe("First Duplicate", () => {
  it("fixed tests", () => {
    expect(firstDuplicate([2, 1, 3, 5, 3, 2])).toBe(3);
    expect(firstDuplicate([2, 4, 3, 5, 1])).toBe(-1);
    expect(firstDuplicate([1, 1, 2])).toBe(1);
    expect(firstDuplicate([5, 5, 5])).toBe(5);
  });

  it("edge cases", () => {
    expect(firstDuplicate([])).toBe(-1);
    expect(firstDuplicate([7])).toBe(-1);
    expect(firstDuplicate([0, 1, 0])).toBe(0); // zero handled like any value
    expect(firstDuplicate([-2, 3, -2])).toBe(-2); // negatives
  });

  it("stays fast on large inputs (an O(n^2) scan would time out here)", () => {
    const arr = Array.from({ length: 500_000 }, (_, i) => i); // all unique
    expect(firstDuplicate(arr)).toBe(-1);
  });
});

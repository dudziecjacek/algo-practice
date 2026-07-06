import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { containsDuplicate } = process.env.REF ? solution : practice;

describe("Contains Duplicate", () => {
  it("fixed tests", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([])).toBe(false);
    expect(containsDuplicate([2, 2])).toBe(true);
  });

  it("edge cases", () => {
    expect(containsDuplicate([7])).toBe(false);
    expect(containsDuplicate([0, -1, 1, 0])).toBe(true); // zero/negatives
  });

  it("stays fast on large inputs (an O(n^2) pair check would time out here)", () => {
    const arr = Array.from({ length: 500_000 }, (_, i) => i); // all distinct
    expect(containsDuplicate(arr)).toBe(false);
  });
});

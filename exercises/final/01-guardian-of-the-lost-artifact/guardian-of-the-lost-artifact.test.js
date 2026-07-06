import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { firstFreeLocker } = process.env.REF ? solution : practice;

describe("Guardian of the Lost Artifact", () => {
  it("fixed tests", () => {
    expect(firstFreeLocker([3, 1, 4, 1, 5])).toBe(2);
    expect(firstFreeLocker([8, 3, 2])).toBe(1);
    expect(firstFreeLocker([])).toBe(1);
    expect(firstFreeLocker([1, 2, 3])).toBe(4);
  });

  it("edge cases", () => {
    expect(firstFreeLocker([1])).toBe(2);
    expect(firstFreeLocker([2, 3, 4])).toBe(1); // 1 missing at the start
    expect(firstFreeLocker([1, 1, 1, 1])).toBe(2); // duplicates ignored
    expect(firstFreeLocker([5, 100, -3, 2, 1])).toBe(3); // out-of-range values don't help
  });

  it("stays fast on large inputs (sorting would be O(n log n))", () => {
    const n = 1_000_000;
    const ids = Array.from({ length: n }, (_, i) => i + 1); // perfect run 1..n
    expect(firstFreeLocker(ids)).toBe(n + 1);
  });
});

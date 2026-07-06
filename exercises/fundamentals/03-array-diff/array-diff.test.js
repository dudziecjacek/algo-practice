import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { arrayDiff } = process.env.REF ? solution : practice;

describe("Array Diff", () => {
  it("fixed tests", () => {
    expect(arrayDiff([1, 2, 2, 2, 3], [2])).toStrictEqual([1, 3]);
    expect(arrayDiff([1, 2, 3], [])).toStrictEqual([1, 2, 3]);
    expect(arrayDiff([1, 2, 3], [1, 2, 3])).toStrictEqual([]);
    expect(arrayDiff([], [1, 2])).toStrictEqual([]);
  });

  it("edge cases", () => {
    expect(arrayDiff([1, 2, 2, 2, 3], [1, 2])).toStrictEqual([3]);
    expect(arrayDiff([-1, 0, 1], [0])).toStrictEqual([-1, 1]); // zero/negatives
  });

  it("stays fast on large inputs (a .includes filter would be O(a*b))", () => {
    const a = Array.from({ length: 300_000 }, (_, i) => i);
    const b = Array.from({ length: 300_000 }, (_, i) => i + 300_000); // disjoint
    expect(arrayDiff(a, b)).toHaveLength(300_000);
  });
});

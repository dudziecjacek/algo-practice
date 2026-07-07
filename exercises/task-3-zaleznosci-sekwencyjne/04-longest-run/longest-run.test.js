import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { longestRun } = process.env.REF ? solution : practice;

describe("Longest Non-Decreasing Run", () => {
  it("fixed tests", () => {
    expect(longestRun([1, 2, 2, 3, 1, 2])).toBe(4);
    expect(longestRun([5, 4, 3, 2])).toBe(1);
    expect(longestRun([1, 2, 3, 4])).toBe(4);
    expect(longestRun([3, 3, 3])).toBe(3);
  });

  it("edge cases", () => {
    expect(longestRun([])).toBe(0);
    expect(longestRun([7])).toBe(1);
    expect(longestRun([2, 1])).toBe(1); // breaks immediately, longest run is a single element
    expect(longestRun([1, 5, 2, 3, 4])).toBe(3); // the later run (2,3,4) is longer than (1,5)
    expect(longestRun([-3, -1, -1, 0, -5, 9])).toBe(4); // negatives, equal allowed
    expect(longestRun([4, 4, 4, 1, 2])).toBe(3); // the run must be CONTIGUOUS, earliest longest wins
  });

  it(
    "stays fast on 1M elements (trying every start is O(n^2) and would time out)",
    () => {
      const n = 1_000_000;
      const sorted = Array.from({ length: n }, (_, i) => i);
      expect(longestRun(sorted)).toBe(n); // whole array is one run — worst case for a naive scan
      const sawtooth = Array.from({ length: n }, (_, i) => i % 3); // 0,1,2,0,1,2,...
      expect(longestRun(sawtooth)).toBe(3);
    },
    2000
  );
});

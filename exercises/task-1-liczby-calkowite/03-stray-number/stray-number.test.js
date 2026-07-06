import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { stray } = process.env.REF ? solution : practice;

describe("Find the Stray Number", () => {
  it("fixed tests", () => {
    expect(stray([1, 1, 1, 1, 2, 1, 1])).toBe(2);
    expect(stray([17, 17, 3, 17, 17])).toBe(3);
  });

  it("edge cases", () => {
    expect(stray([5, 5, 5, 5, 9])).toBe(9);
    expect(stray([2, 4, 4])).toBe(2); // stray at the front
    expect(stray([4, 4, 2])).toBe(2); // stray at the end
    expect(stray([-1, -1, -5])).toBe(-5); // negatives
    expect(stray([0, 7, 0])).toBe(7); // zeros as the common value
  });

  it(
    "stays fast on large inputs (a filter/count-per-element scan is O(n^2) and would time out)",
    () => {
      const n = 500_000; // even count of the common value + 1 stray
      const arr = new Array(n).fill(7);
      arr.push(3);
      expect(stray(arr)).toBe(3);
    },
    2000
  );
});

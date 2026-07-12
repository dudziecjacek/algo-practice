import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { eraseOverlapIntervals } = process.env.REF ? solution : practice;

describe("Non-Overlapping Intervals", () => {
  it("fixed tests", () => {
    expect(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])).toBe(1);
    expect(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])).toBe(2);
    expect(eraseOverlapIntervals([[1, 2], [2, 3]])).toBe(0);
  });

  it("edge cases", () => {
    expect(eraseOverlapIntervals([])).toBe(0);
    expect(eraseOverlapIntervals([[1, 100]])).toBe(0);
    expect(eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]])).toBe(2);
    expect(eraseOverlapIntervals([[-52, 31], [-73, -26], [82, 97], [-65, -11], [-62, -49], [95, 99], [58, 95], [-31, 49], [66, 98], [-63, 2], [30, 47], [-40, -26]])).toBe(7);
  });

  it("does not mutate the input", () => {
    const input = [[3, 4], [1, 2]];
    eraseOverlapIntervals(input);
    expect(input).toStrictEqual([[3, 4], [1, 2]]);
  });
});

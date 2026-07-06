import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { widestBlock } = process.env.REF ? solution : practice;

describe("Widest Block", () => {
  it("fixed tests", () => {
    expect(widestBlock([1, 5, 2, 8, 3, 3], 3)).toBe(1);
    expect(widestBlock([10, 1, 2, 9], 2)).toBe(0);
    expect(widestBlock([7, 7, 1, 2, 3, 100], 3)).toBe(2);
    expect(widestBlock([4, 4, 4, 4], 2)).toBe(0);
  });

  it("edge cases", () => {
    expect(widestBlock([5, 3, 8, 1, 9, 2], 1)).toBe(0); // single block
    expect(widestBlock([42], 1)).toBe(0);
    // ties resolve to the earliest block
    expect(widestBlock([1, 3, 0, 2, 5, 7], 3)).toBe(0); // ranges 2, 2, 2 -> first
  });
});

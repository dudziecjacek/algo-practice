import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { coinChange } = process.env.REF ? solution : practice;

describe("Coin Change", () => {
  it("fixed tests", () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
    expect(coinChange([2], 3)).toBe(-1);
    expect(coinChange([1], 0)).toBe(0);
  });

  it("edge cases", () => {
    expect(coinChange([1, 3, 4], 6)).toBe(2); // greedy would give 3, DP gives 2 (3+3)
    expect(coinChange([2, 5, 10, 1], 27)).toBe(4); // 10+10+5+2
    expect(coinChange([5], 5)).toBe(1);
    expect(coinChange([7], 3)).toBe(-1);
  });

  it("stays fast on a large amount", () => {
    expect(coinChange([1, 5, 10, 25], 9999)).toBe(405); // 399*25 + 2*10 + 4*1 => 405
  });
});

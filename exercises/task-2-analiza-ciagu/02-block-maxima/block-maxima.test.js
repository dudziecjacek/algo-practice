import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { blockMaxima } = process.env.REF ? solution : practice;

describe("Block Maxima", () => {
  it("fixed tests", () => {
    expect(blockMaxima([1, 5, 2, 8, 3, 3], 2)).toStrictEqual([5, 8, 3]);
    expect(blockMaxima([4, 4, 4, 4], 2)).toStrictEqual([4, 4]);
    expect(blockMaxima([-5, -1, -9, -3], 2)).toStrictEqual([-1, -3]);
    expect(blockMaxima([7], 1)).toStrictEqual([7]);
  });

  it("edge cases", () => {
    expect(blockMaxima([3, 1, 4, 1, 5, 9], 6)).toStrictEqual([9]); // one block = whole array
    expect(blockMaxima([3, 1, 4, 1, 5, 9], 1)).toStrictEqual([3, 1, 4, 1, 5, 9]); // block of 1 = identity
    expect(blockMaxima([9, 1, 2, 3], 2)).toStrictEqual([9, 3]); // first element is the block max
  });

  it(
    "handles 1M elements in 250k blocks (Math.max(...block) would blow the stack)",
    () => {
      const n = 1_000_000;
      const arr = Array.from({ length: n }, (_, i) => i);
      expect(blockMaxima(arr, 250_000)).toStrictEqual([
        249_999, 499_999, 749_999, 999_999,
      ]);
    },
    2000
  );
});

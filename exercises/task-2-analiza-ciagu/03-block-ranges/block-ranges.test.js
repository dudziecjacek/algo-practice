import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { blockRanges } = process.env.REF ? solution : practice;

describe("Block Ranges", () => {
  it("fixed tests", () => {
    expect(blockRanges([1, 5, 2, 8, 3, 3], 3)).toStrictEqual([4, 6, 0]);
    expect(blockRanges([10, 1, 2, 9], 2)).toStrictEqual([9, 7]);
    expect(blockRanges([4, 4, 4, 4], 2)).toStrictEqual([0, 0]);
    expect(blockRanges([-5, 5, 0, 0], 2)).toStrictEqual([10, 0]);
  });

  it("edge cases", () => {
    expect(blockRanges([5, 3, 8, 1, 9, 2], 1)).toStrictEqual([8]); // one block, global range
    expect(blockRanges([42], 1)).toStrictEqual([0]); // single element
    expect(blockRanges([7, 7, 1, 2, 3, 100], 3)).toStrictEqual([0, 1, 97]);
    // each block's FIRST element counts too (a scan starting at start+1 fails these)
    expect(blockRanges([10, 20], 1)).toStrictEqual([10]);
    expect(blockRanges([9, 1, 5, 5], 2)).toStrictEqual([8, 0]); // first element is the block max
  });

  it(
    "handles 1M elements in 4 blocks (Math.min/max(...block) would blow the stack)",
    () => {
      const n = 1_000_000;
      const arr = Array.from({ length: n }, (_, i) => i);
      expect(blockRanges(arr, 4)).toStrictEqual([249_999, 249_999, 249_999, 249_999]);
    },
    2000
  );
});

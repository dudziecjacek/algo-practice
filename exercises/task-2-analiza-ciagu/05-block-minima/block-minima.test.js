import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { blockMinima } = process.env.REF ? solution : practice;

describe("Block Minima (uneven blocks)", () => {
  it("fixed tests", () => {
    expect(blockMinima([1, 5, 2, 8, 3], 2)).toStrictEqual([1, 2, 3]);
    expect(blockMinima([4, 4, 4], 2)).toStrictEqual([4, 4]);
    expect(blockMinima([-5, -1, -9], 2)).toStrictEqual([-5, -9]);
    expect(blockMinima([7], 1)).toStrictEqual([7]);
  });

  it("even splits still work", () => {
    expect(blockMinima([1, 5, 2, 8, 3, 3], 2)).toStrictEqual([1, 2, 3]);
    expect(blockMinima([3, 1, 4, 1, 5, 9], 6)).toStrictEqual([1]); // one block = whole array
    expect(blockMinima([3, 1, 4, 1, 5, 9], 1)).toStrictEqual([3, 1, 4, 1, 5, 9]); // block of 1 = identity
  });

  it("edge cases — the tail block must NOT be dropped", () => {
    expect(blockMinima([7, 3], 5)).toStrictEqual([3]); // blockSize > length -> one short block
    expect(blockMinima([], 3)).toStrictEqual([]); // empty input -> no blocks
    expect(blockMinima([9, 1, 8, 2, 100], 2)).toStrictEqual([1, 2, 100]); // lone tail element
    // Math.floor(length / blockSize) would return only 1 block here
    expect(blockMinima([5, 6, 4, 7, 8, 2, 1], 4)).toStrictEqual([4, 1]);
  });

  it(
    "stays fast on 1M+ elements with an uneven tail (Math.min(...block) would blow the stack)",
    () => {
      const n = 1_000_003; // NOT divisible by the block size
      const arr = Array.from({ length: n }, (_, i) => i);
      expect(blockMinima(arr, 250_000)).toStrictEqual([
        0, 250_000, 500_000, 750_000, 1_000_000,
      ]);
    },
    2000
  );
});

import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { maxSlidingWindow } = process.env.REF ? solution : practice;

// O(n*k) reference for cross-checking
function brute(nums, k) {
  const out = [];
  for (let i = 0; i + k <= nums.length; i++) {
    out.push(Math.max(...nums.slice(i, i + k)));
  }
  return out;
}

describe("Sliding Window Maximum", () => {
  it("fixed tests", () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toStrictEqual([3, 3, 5, 5, 6, 7]);
    expect(maxSlidingWindow([1], 1)).toStrictEqual([1]);
    expect(maxSlidingWindow([9, 8, 7], 2)).toStrictEqual([9, 8]);
  });

  it("edge cases", () => {
    expect(maxSlidingWindow([1, 2, 3, 4, 5], 1)).toStrictEqual([1, 2, 3, 4, 5]); // k=1
    expect(maxSlidingWindow([5, 4, 3, 2, 1], 5)).toStrictEqual([5]); // whole array
    expect(maxSlidingWindow([7, 7, 7], 2)).toStrictEqual([7, 7]); // duplicates
    expect(maxSlidingWindow([1, -1], 1)).toStrictEqual([1, -1]);
  });

  it("matches brute force on a random array", () => {
    const arr = Array.from({ length: 3000 }, (_, i) => ((i * 48271) % 1000) - 500);
    for (const k of [1, 2, 7, 50, 500]) {
      expect(maxSlidingWindow(arr, k)).toStrictEqual(brute(arr, k));
    }
  });

  it("stays fast on a large array", () => {
    const n = 1_000_000;
    const arr = Array.from({ length: n }, (_, i) => i); // increasing
    const res = maxSlidingWindow(arr, 3);
    expect(res.length).toBe(n - 2);
    expect(res[0]).toBe(2);
    expect(res[res.length - 1]).toBe(n - 1);
  });
});

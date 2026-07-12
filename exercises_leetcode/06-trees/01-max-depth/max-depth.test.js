import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { maxDepth } = process.env.REF ? solution : practice;

// Build a tree from a LeetCode-style level-order array (null = missing child).
function buildTree(arr) {
  if (arr.length === 0 || arr[0] === null) return null;
  const root = { val: arr[0], left: null, right: null };
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = { val: arr[i], left: null, right: null };
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = { val: arr[i], left: null, right: null };
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

describe("Maximum Depth of Binary Tree", () => {
  it("fixed tests", () => {
    expect(maxDepth(buildTree([3, 9, 20, null, null, 15, 7]))).toBe(3);
    expect(maxDepth(null)).toBe(0);
    expect(maxDepth(buildTree([1]))).toBe(1);
  });

  it("edge cases", () => {
    expect(maxDepth(buildTree([1, 2]))).toBe(2); // only left child
    expect(maxDepth(buildTree([1, null, 2]))).toBe(2); // only right child
    // fully left-skewed chain of 5 nodes
    let skewed = null;
    for (let v = 5; v >= 1; v--) skewed = { val: v, left: skewed, right: null };
    expect(maxDepth(skewed)).toBe(5);
  });

  it("handles a deep balanced tree", () => {
    // perfect tree of height 15 -> 2^15 - 1 nodes
    function perfect(h) {
      if (h === 0) return null;
      return { val: h, left: perfect(h - 1), right: perfect(h - 1) };
    }
    expect(maxDepth(perfect(15))).toBe(15);
  });
});

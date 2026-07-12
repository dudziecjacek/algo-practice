import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { shortestPath } = process.env.REF ? solution : practice;

describe("Shortest Path in a Grid (BFS)", () => {
  it("fixed tests", () => {
    expect(shortestPath([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(5);
    expect(shortestPath([[0, 1], [1, 0]])).toBe(-1);
    expect(shortestPath([[0]])).toBe(1);
  });

  it("edge cases", () => {
    expect(shortestPath([[1]])).toBe(-1); // start is a wall
    expect(shortestPath([[0, 0], [0, 1]])).toBe(-1); // end is a wall
    expect(shortestPath([[0, 0, 0, 0]])).toBe(4); // single row
    expect(shortestPath([[0], [0], [0]])).toBe(3); // single column
    // walls force a detour: straight line blocked, go around
    expect(shortestPath([[0, 0, 0], [1, 1, 0], [0, 0, 0]])).toBe(5);
  });

  it("stays fast on a large open grid", () => {
    const n = 500;
    const grid = Array.from({ length: n }, () => new Array(n).fill(0));
    expect(shortestPath(grid)).toBe(2 * n - 1); // (n-1)+(n-1)+1 cells
  });
});

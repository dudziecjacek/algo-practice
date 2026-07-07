import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { countBalancedPrefixes } = process.env.REF ? solution : practice;

describe("Count Balanced Prefixes", () => {
  it("fixed tests", () => {
    expect(countBalancedPrefixes("()()")).toBe(2);
    expect(countBalancedPrefixes("(())")).toBe(1);
    expect(countBalancedPrefixes("()(")).toBe(1);
    expect(countBalancedPrefixes("())(")).toBe(1);
  });

  it("edge cases", () => {
    expect(countBalancedPrefixes("")).toBe(0);
    expect(countBalancedPrefixes("(")).toBe(0); // never closes
    expect(countBalancedPrefixes(")")).toBe(0); // leading closer
    expect(countBalancedPrefixes(")(")).toBe(0); // negative on the first char, stop
    expect(countBalancedPrefixes("()()()")).toBe(3); // three balanced moments
    expect(countBalancedPrefixes("(()())")).toBe(1); // only the full string returns to zero
    expect(countBalancedPrefixes("()))((")).toBe(1); // count "()" then the order breaks for good
  });

  it(
    "stays fast on 600k+ chars (re-scanning each prefix is O(n^2) and would time out)",
    () => {
      const k = 300_000;
      expect(countBalancedPrefixes("()".repeat(k))).toBe(k); // a balanced moment every 2 chars
      expect(countBalancedPrefixes("(".repeat(k) + ")".repeat(k))).toBe(1); // only the whole string
    },
    2000
  );
});

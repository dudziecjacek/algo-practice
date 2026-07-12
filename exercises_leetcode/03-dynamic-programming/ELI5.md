# ELI5: Dynamic Programming / Memoization

## Stop re-doing the same homework

Suppose to solve problem #10 you need #9 and #8; to solve #9 you need #8
and #7… If you solve it naively (plain recursion), you compute #8 over and
over — thousands of times. Exponentially slow.

**Dynamic programming** = solve each little sub-problem **once**, write the
answer on a sticky note, and just read the note next time you need it.

Two ways to keep the notes:

- **Memoization (top-down):** write the natural recursion, but before
  computing `f(n)` check "did I already solve this? " If yes, return the
  cached answer. If no, compute and cache it.
- **Tabulation (bottom-up):** fill an array `dp[]` from the smallest
  sub-problem up to the one you want, in order.

Same idea, opposite direction.

## The two things you must find

1. **State** — what describes a sub-problem? (e.g. `dp[amount]` = fewest
   coins to make `amount`; `dp[i][j]` = best answer using first `i` of one
   thing and `j` of another.)
2. **Recurrence** — how does a bigger answer build from smaller ones?
   (e.g. "to make `amount`, try each coin `c`, then I still need
   `amount - c`.")

If a problem has **overlapping sub-problems** (the same smaller question
shows up again and again) and **optimal substructure** (the best big
answer is built from best small answers), DP is your tool.

Cost is usually **(number of states) × (work per state)** — e.g. a 1D
table is O(n), a 2D table is O(n·m).

**When you see:** "how many ways…", "minimum/maximum cost to…", "longest
/ best sub-something" — and greedy feels like it might miss a better
combo — reach for DP.

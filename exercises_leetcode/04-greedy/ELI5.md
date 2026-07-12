# ELI5: Greedy

## Always grab the best-looking option right now

A greedy algorithm makes the choice that looks best **at this moment** and
never looks back — no undo, no "what if."

Think of giving change: to use the fewest coins, you keep handing over the
biggest coin that still fits. For normal coin systems that just… works.

Greedy is wonderfully simple and usually **O(n)** or **O(n log n)** (often
you sort first, then sweep once).

## The catch: greedy is sometimes WRONG

Grabbing the best local move doesn't always lead to the best final
result. With coins `[1, 3, 4]` making `6`, greedy grabs `4 + 1 + 1`
(3 coins) but the best is `3 + 3` (2 coins). When local choices can paint
you into a corner, you need DP instead.

So the real skill is **knowing when greedy is safe.** It's safe when you
can argue: "taking the best now never blocks a better overall answer."

Two classic safe patterns you'll practice here:

- **Reach as far as you can** (Jump Game): sweep left to right tracking the
  farthest index reachable. One pass.
- **Earliest finish wins** (interval scheduling): to keep the most
  non-overlapping intervals, always keep the one that **ends soonest** —
  it leaves the most room for the rest. Sort by end time, then sweep.

**When you see:** "maximum/minimum number of…", "can you reach…", "fit as
many as possible" — try greedy first, but sanity-check it against a
tricky example before trusting it.

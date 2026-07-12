# ELI5: Recursion & Backtracking

## A function that calls itself

Recursion is solving a problem by solving a **smaller version of the same
problem**, until it's so small the answer is obvious.

Two parts, always:

1. **Base case** — the tiny version you can answer immediately (and that
   *stops* the recursion). Forget this and you loop forever (stack
   overflow).
2. **Recursive case** — do a little work, then call yourself on something
   smaller, trusting it returns the right answer.

Analogy: standing in a cinema queue, you don't count everyone. You ask the
person ahead "what's your position?" They ask the person ahead of *them*.
The front person says "1" (base case), and each answer bubbles back +1.

Each call waits on the calls it makes — that stack of waiting calls is the
**call stack**, and its height is your memory cost.

## Backtracking = try, recurse, undo

For "generate **all** combinations/permutations/arrangements" problems,
recursion becomes **backtracking**:

> Make a choice → recurse to build on it → **undo the choice** → try the
> next one.

Picture exploring a maze: walk down a path; if it dead-ends, walk *back*
to the last fork and try another branch. The "walk back and unmark" step
is the backtrack.

You're basically exploring a tree of all possibilities, but **pruning**
branches that can't work (e.g. don't add a `)` if there's nothing to
close). Because you enumerate every valid answer, these are naturally
expensive — often O(n!) or O(2ⁿ). That's expected; the output itself is
that big.

**When you see:** "print/return **all** ways/combinations/subsets/
permutations", "explore every option", or any naturally self-similar
structure (trees!) → recursion / backtracking.

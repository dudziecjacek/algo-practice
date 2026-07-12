# ELI5: Divide & Conquer

## Big problem? Chop it in half.

You have a giant pile of exam papers to sort by score, alone. Too big to
hold in your head. So:

1. **Divide** — split the pile in two.
2. **Conquer** — sort each smaller pile (split *those* again if still too
   big… all the way down to a single paper, which is already "sorted").
3. **Combine** — merge the two now-sorted piles back into one, comparing
   the top of each.

That's **merge sort**. Splitting takes log-n levels, and each level does
n work to merge, so **O(n log n)**.

The whole family follows this shape: *break into smaller versions of the
same problem, solve those, stitch the answers together.*

## Why it's fast: you throw work away (or reuse it)

- **Quickselect** (find the k-th largest): pick a pivot, shove smaller
  items left and bigger items right. Now you know exactly which side your
  answer is on — so you **only recurse into that one side**, not both.
  Throwing away half each time averages out to **O(n)**.
- **Fast power / binary search** are D&C too: each step halves the work.

## The mental test
Ask: "Can I split this into 2 smaller copies of the *same* question, and
cheaply combine their answers?" If yes, D&C fits.

- Recurse into **both** halves and merge → usually O(n log n).
- Recurse into **one** half only → often O(n) or O(log n).

**When you see:** "sort it yourself", "k-th smallest/largest", "count
across a split", anything that smells recursive-and-halvable.

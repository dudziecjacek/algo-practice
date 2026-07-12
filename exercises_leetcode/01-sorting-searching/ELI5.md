# ELI5: Sorting & Searching

## Searching = finding a name in a phone book

Imagine a phone book (sorted A→Z) and you want "Smith".

- **Linear search** = reading every name from page 1. Works, but slow.
  O(n) — n names, up to n peeks.
- **Binary search** = open the *middle*. Is "Smith" before or after? Throw
  away the half it can't be in. Open the middle of what's left. Repeat.
  Every peek deletes **half** the book, so you find anyone in ~20 peeks
  out of a million names. That's **O(log n)** — the magic of "halve it
  every time."

**Binary search only works on sorted data.** No sorting, no halving.

The one rule people trip on: be careful with your boundaries (`lo`, `hi`,
`mid`). One off-by-one and you skip the answer or loop forever. Pin down
"which half do I keep, and does `mid` stay or go?"

### Rotated twist
Sometimes the sorted book got "rotated" — someone cut the deck: `S T U V
A B C`. It's not fully sorted, but here's the secret: **at least one half
around the middle is still sorted.** Check which half is clean, see if
your target lives in that clean half, and jump accordingly. Still O(log
n).

## Sorting = putting things in order first

Lots of problems become easy *once the data is sorted* ("find duplicates",
"closest pair", "top K"). Built-in `.sort()` is O(n log n). The thing to
remember in an interview: sorting costs **O(n log n)** — if you sort as a
first step, your whole solution can't be faster than that. Sometimes a
hash set (O(n)) beats sorting; sometimes sorting is the cleanest path.
Know the trade.

**When you see:** "it's sorted" / "find X fast" / "how many are less
than…" → think binary search. "Everything gets simpler in order" → sort
first.

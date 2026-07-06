# Task 1 — Praca z liczbami całkowitymi

> Zadanie sprawdza umiejętność wyszukiwania określonych zależności między
> liczbami w tablicy, np. relacji między liczbą dodatnią i jej
> odpowiednikiem ujemnym. **Liczy się pierwsze wystąpienie pary.**

**Core skill:** as you sweep the array **once**, ask "have I already seen
the value that completes a relation with the current one?" — answered in
O(1) with a `Set` (presence) or `Map` (value → index). The trap is the
nested loop / `.includes()` scan (O(n²)); the fix is a hash structure
built incrementally, checked **before** you store the current element.

| Exercise | What it drills |
|----------|----------------|
| [01-first-opposite-pair](01-first-opposite-pair) | `Set`, check-before-store, first completing pair, the zero edge case |
| [02-two-sum](02-two-sum) | `Map` value→index, complement lookup, returning the pair's indices |
| [03-stray-number](03-stray-number) | frequency / XOR relation of one element to all the rest |
| [04-first-duplicate](04-first-duplicate) | `Set`, first value to repeat (first by second occurrence) |
| [05-count-opposite-pairs](05-count-opposite-pairs) | frequency map, counting `x`/`-x` pairs in O(n), the zero case |
| [06-sum-of-pairs](06-sum-of-pairs) | `Set` complement lookup, first pair to sum to target (earliest completion) |

Topics: array operations · hash sets/maps · loops & counters · edge cases
· O(n) single pass.

# Task 3 — Logika zależności sekwencyjnych

> Zadanie sprawdza umiejętność rozpoznania momentów, w których spełniony
> jest określony warunek kolejnościowy, np. gdy elementy pojawiają się w
> takiej konfiguracji, że tworzą **poprawny ciąg**.

**Core skill:** the answer depends on order — carry running state as you
sweep and detect the moment(s) a condition holds. The brief asks for
*moments* (plural) where the sequence stays valid, so the answers here
span first-index, boolean, **counts**, and **longest stretch**. Shapes
that show up:

- **counter / running accumulator** — one variable carried forward, read
  as a threshold (first-negative-balance) or a running length
  (longest-run).
- **precomputed total + running side** — two pieces of state
  (equilibrium).
- **running balance, tallied** — count every moment the balance returns
  to a valid resting point (count-balanced-prefixes).
- **stack** — when you must know *which* opener is innermost, not just
  how many are open (valid-braces).

The trap is recomputing from scratch inside the loop
(`arr.slice(0, i).reduce(...)` or re-validating every prefix), which is
O(n²).

| Exercise | What it drills |
|----------|----------------|
| [01-valid-braces](01-valid-braces) | stack + closer→opener lookup, correct nesting |
| [02-equilibrium-index](02-equilibrium-index) | total + running left sum, check before update |
| [03-first-negative-balance](03-first-negative-balance) | single running accumulator, strict threshold |
| [04-longest-run](04-longest-run) | resettable counter + running max, longest valid stretch |
| [05-count-balanced-prefixes](05-count-balanced-prefixes) | running balance, **count** every valid moment |
| [06-first-unsorted-index](06-first-unsorted-index) | compare to predecessor, first break in order |

Topics: loops & counters · running/prefix sums · stacks · edge cases · O(n).

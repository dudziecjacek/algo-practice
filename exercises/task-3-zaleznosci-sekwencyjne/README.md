# Task 3 — Logika zależności sekwencyjnych

> Zadanie sprawdza umiejętność rozpoznania momentów, w których spełniony
> jest określony warunek kolejnościowy, np. gdy elementy pojawiają się w
> takiej konfiguracji, że tworzą **poprawny ciąg**.

**Core skill:** the answer depends on order — carry running state as you
sweep and detect the first index where a condition holds. Three shapes
show up:

- **counter / running accumulator** — one variable carried forward
  (first-negative-balance).
- **precomputed total + running side** — two pieces of state
  (equilibrium, pivot-with-multiplier).
- **stack** — when you must know *which* opener is innermost, not just
  how many are open (valid-braces).

The trap is recomputing from scratch inside the loop
(`arr.slice(0, i).reduce(...)`), which is O(n²).

| Exercise | What it drills |
|----------|----------------|
| [01-valid-braces](01-valid-braces) | stack + closer→opener lookup, correct nesting |
| [02-equilibrium-index](02-equilibrium-index) | total + running left sum, check before update |
| [03-first-negative-balance](03-first-negative-balance) | single running accumulator, strict threshold |
| [04-pivot-with-multiplier](04-pivot-with-multiplier) | asymmetric running-sum condition |
| [05-balanced-parentheses](05-balanced-parentheses) | single-type counter, never-below-zero + ends-at-zero |
| [06-first-unsorted-index](06-first-unsorted-index) | compare to predecessor, first break in order |

Topics: loops & counters · running/prefix sums · stacks · edge cases · O(n).

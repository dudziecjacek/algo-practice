# Task 2 — Analiza ciągu wartości liczbowych

> W tym zadaniu należy podzielić dane na logiczne zakresy i porównać
> różnice między wartościami **minimalnymi i maksymalnymi** w
> poszczególnych częściach.

**Core skill:** split the array into consecutive blocks by index, and for
each block track `min`/`max` in a **single pass** (never sort just to get
extremes, never `Math.min(...block)` which is both slower and blows the
call stack on big blocks). Nested loops here are still O(n): the blocks
partition the array, so the inner iterations sum back to `n`.

| Exercise | What it drills |
|----------|----------------|
| [01-largest-block-range](01-largest-block-range) | split into K blocks, `max - min` per block, largest range |
| [02-block-maxima](02-block-maxima) | split into fixed-size blocks, return the max of each |
| [03-block-ranges](03-block-ranges) | `max - min` of every block (min + max tracked together) |
| [04-widest-block](04-widest-block) | index of the widest block, earliest on ties |
| [05-block-minima](05-block-minima) | min of each block (the mirror of block-maxima) |
| [06-max-sum-block](06-max-sum-block) | largest block **sum**, `-Infinity` seed for all-negative input |

Topics: indexing & splitting into ranges · min/max functions · loops
& counters · edge cases · O(n).

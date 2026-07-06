# 🧩 Strażnik Zagubionego Artefaktu / Guardian of the Lost Artifact

Zarządzasz cyfrowym skarbcem. Każda skrytka ma unikalny numer ID —
dodatnią liczbę całkowitą (`1, 2, 3, ...`). Skrytki powinny tworzyć
idealny, ciągły ciąg zaczynający się od `1`. Dostajesz nieposortowaną
tablicę aktualnie zajętych skrytek; brakuje dokładnie jednej — **najniższej
wolnej** — którą trzeba uzupełnić, by zachować ciągłość od `1` w górę.
Zwróć jej numer.

> You manage a digital vault. Each locker has a unique positive-integer
> ID; lockers should form a perfect run starting at `1`. Given an
> unsorted array of the currently occupied lockers, return the **first
> (lowest) free locker number** needed to keep the sequence contiguous
> from `1` upward.

```js
export function firstFreeLocker(ids) {
  // ...
}
```

## Przykłady / Examples

```js
firstFreeLocker([3, 1, 4, 1, 5]) // -> 2   (mamy 1, brakuje 2)
firstFreeLocker([8, 3, 2])       // -> 1   (ciąg musi zaczynać się od 1)
firstFreeLocker([])              // -> 1   (pusta tablica)
firstFreeLocker([1, 2, 3])       // -> 4   (idealny ciąg -> pierwsza wolna to N+1)
```

## Warunki / Constraints

- **O(n)** — tylko stała liczba przejść po tablicy. Sortowanie
  (`O(n log n)`) odpada.
- **Duplikaty** — numery mogą się powtarzać (patrz przykład 1).
- **Przypadki brzegowe** — pusta tablica `[]`; idealny ciąg `[1, 2, 3]`.

## Pattern / gotcha

The two questions the puzzle asks you:

1. **Which data structure?** A `Set` (hash set) — it ignores duplicates
   for free and answers "is number `i` present?" in O(1).
2. **The algorithm.** Put every id in a `Set` (one pass, O(n)). Then walk
   `i = 1, 2, 3, ...` and return the first `i` the set does **not**
   contain. The answer is provably within `1..N+1` (an `N`-element set
   can't cover all `N+1` of those candidates), so the scan is O(n) too —
   never falls through, always returns.

Answer starts at `1`, not `0` (IDs are positive), and negatives / values
larger than the array simply never match a candidate — they can't fill a
gap, only sit unused.

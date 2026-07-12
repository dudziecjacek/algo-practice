export function shortestPath(grid) {
  const rows = grid.length;
  if (rows === 0) return -1;
  const cols = grid[0].length;
  if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) return -1;

  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  let queue = [[0, 0]];
  visited[0][0] = true;
  let steps = 1;

  while (queue.length > 0) {
    const next = [];
    for (const [r, c] of queue) {
      if (r === rows - 1 && c === cols - 1) return steps;
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (
          nr >= 0 && nr < rows &&
          nc >= 0 && nc < cols &&
          !visited[nr][nc] &&
          grid[nr][nc] === 0
        ) {
          visited[nr][nc] = true;
          next.push([nr, nc]);
        }
      }
    }
    queue = next;
    steps++;
  }

  return -1;
}

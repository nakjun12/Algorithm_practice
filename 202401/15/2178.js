const input = require("fs")
  .readFileSync("202401/15/2178.txt")
  .toString()
  .trim()
  .split("\n");

const [ty, tx] = input[0].split(" ").map((e) => Number(e) - 1);
const maze = input.slice(1);

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];
const visited = Array.from({ length: maze.length }, () =>
  new Array(maze[0].length).fill(0)
);
const queue = [[0, 0]];

while (queue.length > 0) {
  let [y, x] = queue.shift();
  if (y === ty && x === tx) {
    console.log(visited[ty][tx] + 1);
    break;
  }

  for (let i = 0; i < 4; i++) {
    let cy = y + dy[i];
    let cx = x + dx[i];

    if (
      cy >= 0 &&
      cy <= maze.length - 1 &&
      cx >= 0 &&
      cx <= maze[0].length - 1 &&
      Number(maze[cy][cx]) === 1 &&
      visited[cy][cx] === 0
    ) {
      queue.push([cy, cx]);
      visited[cy][cx] = visited[y][x] + 1;
    }
  }
}

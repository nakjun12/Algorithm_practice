//적록 색약 10026

const input = require("fs")
  .readFileSync("202401/31/10026.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const colors = input.slice(1);

const visited = Array.from({ length: n }, () => new Array(n).fill(false));
const directinon = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];
let cntNormal = 0;
let cntColorBlind = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      const color = colors[i][j];
      bfs(i, j, color);
      cntNormal++;
    }
  }
}

// 방문 배열 초기화
for (let i = 0; i < n; i++) {
  visited[i].fill(false);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      const color = colors[i][j];
      bfs(i, j, color, true);
      cntColorBlind++;
    }
  }
}

function bfs(i, j, color, isColorBlind) {
  let queue = [[i, j]];
  visited[i][j] = true;

  while (queue.length) {
    const [cy, cx] = queue.shift();

    for (let [y, x] of directinon) {
      let ny = cy + y;
      let nx = cx + x;
      if (ny >= 0 && nx >= 0 && ny < n && nx < n && !visited[ny][nx]) {
        if (
          (!isColorBlind && colors[ny][nx] === color) ||
          (isColorBlind &&
            (color === "B" ? colors[ny][nx] === "B" : colors[ny][nx] !== "B"))
        ) {
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
    }
  }
}

console.log(cntNormal, cntColorBlind);

//테트로미노

const input = require("fs")
  .readFileSync("202403/05/14500.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [ly, lx] = input[0];
const paper = input.slice(1);
// 상하좌우 이동 방향
const directions = [
  [0, 1], // 오른쪽
  [0, -1], // 왼쪽
  [1, 0], // 아래
  [-1, 0] // 위
];

let maxSum = 0;
const visited = Array.from({ length: ly }, () => Array(lx).fill(false));
const isValid = (ny, nx) => ny >= 0 && nx >= 0 && ny < ly && nx < lx;

for (let i = 0; i < paper.length; i++) {
  for (let j = 0; j < paper[i].length; j++) {
    const curSum = DFS(i, j, 0, 0);
    const Tsum = checkTShape(i, j);
    maxSum = Math.max(maxSum, curSum, Tsum);
  }
}

function DFS(y, x, n, sum) {
  let maxResult = 0;

  if (n === 4) {
    return sum;
  } else {
    directions.forEach(([py, px]) => {
      let ny = py + y;
      let nx = px + x;
      if (isValid(ny, nx) && !visited[ny][nx]) {
        visited[ny][nx] = true;
        const result = DFS(ny, nx, n + 1, sum + paper[ny][nx]);
        maxResult = Math.max(maxResult, result);
        visited[ny][nx] = false;
      }
    });
  }

  return maxResult;
}

function checkTShape(y, x) {
  let sum = 0;

  directions.forEach((e, index) => {
    let curSum = paper[y][x];
    for (let i = 0; i < 4; i++) {
      if (index === i) continue;
      let ny = directions[i][0] + y;
      let nx = directions[i][1] + x;
      if (isValid(ny, nx)) {
        curSum += paper[ny][nx];
      }
    }

    sum = Math.max(curSum, sum);
  });

  return sum;
}

console.log(maxSum);

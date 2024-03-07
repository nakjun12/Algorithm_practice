//쉬운 최단 거리

const input = require("fs")
  .readFileSync("202403/07/14940.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [n, m] = input[0];
// 2<= n <= 1000
// 2<= m <= 1000

const field = input.slice(1);
let start = [];
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];

// 0은 갈 수 없는 땅, 2는 목표지점, 입력에서 2는 한개
//갈 수없는 땅은 0을 출력하고, 갈 수 있는 땅 중에 도달할 수 없으면 -1 출력한다

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (field[i][j] === 2) {
      start = [i, j];
      break;
    }
  }
}

//특이사항 출발점도 0임

function BFS(start) {
  let queue = [start];
  const distances = Array.from({ length: n }, () => Array(m).fill(-1));
  distances[start[0]][start[1]] = 0;

  while (queue.length > 0) {
    let [cy, cx] = queue.shift();
    directions.forEach(([dy, dx]) => {
      let ny = dy + cy;
      let nx = dx + cx;
      if (
        ny >= 0 &&
        nx >= 0 &&
        ny < n &&
        nx < m &&
        field[ny][nx] === 1 &&
        distances[ny][nx] === -1
      ) {
        distances[ny][nx] = distances[cy][cx] + 1;
        queue.push([ny, nx]);
      }
    });
  }
  return distances;
}

const result = BFS(start);
let answer = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (field[i][j] === 0) {
      answer += 0 + " ";
    } else {
      answer += result[i][j] + " ";
    }
  }
  answer += "\n";
}

console.log(answer);

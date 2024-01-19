const input = require("fs")
  .readFileSync("202401/19/2667.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const houses = input.slice(1).map((e) => e.split("").map(Number));

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];

let housesCnt = 0;
const groups = [];

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (houses[i][j] === 1) {
      groups.push(housesCheck(i, j));
      housesCnt++;
    }
  }
}

groups.sort((a, b) => a - b);

console.log(`${housesCnt}\n${groups.join("\n")}`);

function housesCheck(y, x) {
  let houseCnt = 1;
  let queue = [[y, x]];
  houses[y][x] = 0;

  while (queue.length > 0) {
    let [cy, cx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let ny = dy[i] + cy;
      let nx = dx[i] + cx;
      if (ny >= 0 && nx >= 0 && ny < num && nx < num && houses[ny][nx] === 1) {
        houses[ny][nx] = 0;
        queue.push([ny, nx]);
        houseCnt++;
      }
    }
  }
  return houseCnt;
}

//제반 사항을 정리해야했음

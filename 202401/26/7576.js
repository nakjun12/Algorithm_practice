const input = require("fs")
  .readFileSync("202401/26/7576.txt")
  .toString()
  .trim()
  .split("\n");

const [x, y] = input[0].split(" ").map(Number);
const boxes = input.slice(1).map((e) => e.split(" ").map(Number));

let ripes = 0;
let total = 0;
let queue = [];

for (let i = 0; i < y; i++) {
  for (let j = 0; j < x; j++) {
    if (boxes[i][j] === 1) {
      ripes++;

      queue.push([i, j]);
    }

    if (boxes[i][j] !== -1) {
      total++;
    }
  }
}

let directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];
let days = -1;

while (queue.length > 0) {
  let newQueue = [];

  for (let [cy, cx] of queue) {
    for (let [dy, dx] of directions) {
      let ny = cy + dy;
      let nx = cx + dx;
      if (ny >= 0 && ny < y && nx >= 0 && nx < x && boxes[ny][nx] === 0) {
        newQueue.push([ny, nx]);
        boxes[ny][nx] = 1;
        ripes++;
      }
    }
  }

  days++;
  queue = newQueue;
}

console.log(total === ripes ? days : -1);

//제반 사항을 기록하자

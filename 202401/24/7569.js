const input = require("fs")
  .readFileSync("202401/24/7569.txt")
  .toString()
  .trim()
  .split("\n");

let [x, y, z] = input[0].split(" ").map(Number);
const boxes = [];

for (let i = 0; i < z; i++) {
  const layer = input
    .slice(1 + i * y, 1 + (i + 1) * y)
    .map((e) => e.split(" ").map(Number));
  boxes.push(layer);
}

console.log(ripeTomatoes(x, y, z, boxes));

function ripeTomatoes(X, Y, Z, Boxes) {
  // 확인부터
  let queue = [];
  let ripes = 0,
    total = 0,
    days = -1;
  for (let i = 0; i < Z; i++) {
    for (let j = 0; j < Y; j++) {
      for (let k = 0; k < X; k++) {
        let t = Boxes[i][j][k];

        if (t === 1) {
          ripes++;
          queue.push([i, j, k]);
        }
        if (t !== -1) total++;
      }
    }
  }

  if (ripes === total) return 0;

  const directions = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1]
  ];

  while (queue.length > 0) {
    const newQueue = [];
    for (let [z, y, x] of queue) {
      for (let [dz, dy, dx] of directions) {
        let cz = z + dz,
          cy = y + dy,
          cx = x + dx;
        if (
          cz >= 0 &&
          cy >= 0 &&
          cx >= 0 &&
          cz < Z &&
          cy < Y &&
          cx < X &&
          Boxes[cz][cy][cx] === 0
        ) {
          Boxes[cz][cy][cx] = 1;
          newQueue.push([cz, cy, cx]);
          ripes++;
        }
      }
    }
    queue = newQueue;
    days++;
  }

  if (ripes < total) return -1;

  return days;
}

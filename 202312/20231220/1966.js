const input = require("fs")
  .readFileSync("202312/20231220/1966.txt")
  .toString()
  .trim()
  .split("\n");

let testNum = input[0];

for (let i = 0; i < testNum; i++) {
  let [, index] = input[i * 2 + 1].split(" ").map(Number);
  let arr = input[i * 2 + 2].split(" ").map(Number);

  console.log(printQueue(index, arr));
}

function printQueue(i, arr) {
  let queue = arr.map((priority, index) => ({
    priority,
    index
  }));
  let sortedPriorities = [...arr].sort((a, b) => b - a);
  let cnt = 0;

  while (queue.length > 0) {
    let cur = queue.shift();
    if (cur.priority === sortedPriorities[0]) {
      sortedPriorities.shift();
      cnt++;
      if (cur.index === i) return cnt;
    } else {
      queue.push(cur);
    }
  }
}

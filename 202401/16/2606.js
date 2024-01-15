const input = require("fs")
  .readFileSync("202401/16/2579.txt")
  .toString()
  .trim()
  .split("\n");

const [n, connectNum] = input.slice(0, 2).map(Number);
const edges = input.slice(2).map((e) => e.split(" ").map(Number));
const connect = {};

edges.forEach(([a, b]) => {
  connect[a] ? connect[a].push(b) : (connect[a] = [b]);
  connect[b] ? connect[b].push(a) : (connect[b] = [a]);
});
const visited = new Array(n + 1).fill(false);
const queue = [1];
let cnt = 0;
visited[1] = true;

while (queue.length > 0) {
  let cur = queue.shift();

  connect[cur]?.forEach((e) => {
    if (!visited[e]) {
      visited[e] = true;
      queue.push(e);
      cnt++;
    }
  });
}

console.log(cnt);

//연결 요소의 개수

const input = require("fs")
  .readFileSync("202402/29/11724.txt")
  .toString()
  .trim()
  .split("\n");

const [n, t] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((e) => e.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);

for (let [u, v] of arr) {
  graph[u].push(v);
  graph[v].push(u);
}

const visited = Array(n + 1).fill(false);
let count = 0;

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    visited[i] = true;
    DFS(i);
    count++;
  }
}

function DFS(i) {
  graph[i].forEach((e) => {
    if (!visited[e]) {
      visited[e] = true;
      DFS(e);
    }
  });
}

console.log(count);

// 경로 탐색
const input = require("fs")
  .readFileSync("202402/27/11403.txt")
  .toString()
  .trim()
  .split("\n");

const nodeCount = Number(input[0]); // 노드의 개수
const adjacencyMatrix = input.slice(1).map((row) => row.split(" ").map(Number)); // 인접 행렬
const pathMatrix = Array.from({ length: nodeCount }, () =>
  Array(nodeCount).fill(0)
); // 경로 행렬

// 모든 노드에 대해 경로 탐색을 시작합니다.
for (let startNode = 0; startNode < nodeCount; startNode++) {
  findPaths(startNode);
}

function findPaths(startNode) {
  let visited = Array(nodeCount).fill(false); // 방문한 노드를 추적하는 배열

  function dfs(currentNode) {
    adjacencyMatrix[currentNode].forEach((isConnected, nextNode) => {
      if (isConnected && !visited[nextNode]) {
        visited[nextNode] = true; // 다음 노드를 방문했음을 표시
        pathMatrix[startNode][nextNode] = 1; // 경로가 존재함을 표시
        dfs(nextNode); // 다음 노드에서 더 깊은 탐색을 계속합니다.
      }
    });
  }

  dfs(startNode); // 시작 노드에서 깊이 우선 탐색을 시작합니다.
}

console.log(pathMatrix); // 최종 경로 행렬을 출력합니다.

const input = require("fs")
  .readFileSync("202401/02/1012.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
let arr = input.slice(1);
let res = "";
for (let i = 0; i < num; i++) {
  let [x, y, n] = arr[0].split(" ").map(Number);
  let curArr = arr.slice(1, n + 1).map((e) => e.split(" ").map(Number));
  res += cabbageCheck(x, y, curArr) + "\n";
  arr = arr.slice(n + 1);
}
// 특정 수를 입력하면, 확인하고 없으면 마무리함
console.log(res.trim());

function cabbageCheck(x, y, arr) {
  //   console.log(arr);
  let farm = Array.from({ length: y }, () => new Array(x).fill(0));
  for (let [x, y] of arr) {
    farm[y][x] = 1;
  }
  return warmCheck(farm);
  //   for (let num of farm) console.log(num);
}

function warmCheck(farm) {
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  let cnt = 0;
  function DFS(y, x) {
    farm[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (
        ny >= 0 &&
        nx >= 0 &&
        farm.length > ny &&
        farm[0].length > nx &&
        farm[ny][nx] === 1
      )
        DFS(ny, nx);
    }
  }

  for (let i = 0; i < farm.length; i++) {
    for (let j = 0; j < farm[0].length; j++) {
      if (farm[i][j] === 1) {
        DFS(i, j);
        cnt++;
      }
    }
  }
  return cnt;
}

// 이제 계산 하는 로직
//dfs에서 순회하면서 지우는 로직 잘못만들었던게 아쉽다
//cnt ++
//함수 분리는 잘했음
// ny, nx 주의할 것

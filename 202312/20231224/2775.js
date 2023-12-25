const input = require("fs")
  .readFileSync("202312/20231224/2775.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let numArr = input.slice(1);

let dp = Array.from({ length: 15 }, () => new Array(15).fill(0));

for (let i = 1; i < 15; i++) {
  dp[0][i] = i;
}

for (let i = 1; i < 15; i++) {
  for (let k = 1; k < 15; k++) {
    for (let j = 1; j <= k; j++) {
      dp[i][k] += dp[i - 1][j];
    }
  }
}

for (let i = 0; i < numArr.length; i += 2) {
  let y = numArr[i];
  let x = numArr[i + 1];
  console.log(dp[y][x]);
}

//1. k(y)층 만큼 계산
//2. n(x)호 만큼 계산

//아래처럼 호수 계산을 하나씩 더해주는 식으로 증가함

// 1 5 15 35 70
// 1 4 10 20 35
// 1 3 6 10 15
// 1 2 3 4 5

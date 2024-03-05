//2 x n 타일링

const input = require("fs")
  .readFileSync("202403/04/11727.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input[0];

// console.log(n);

const dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[n]);

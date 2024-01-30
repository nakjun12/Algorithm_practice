//파도반 수열 9461

const input = require("fs")
  .readFileSync("202401/31/9461.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dp = [1, 1, 1];

for (let i = 3; i < 100; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

let answer = "";

for (let i = 1; i < input.length; i++) {
  const num = input[i];

  answer += dp[num - 1] + "\n";
}
console.log(answer);

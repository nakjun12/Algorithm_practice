const input = require("fs")
  .readFileSync("202401/30/9095.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dp = [0, 1, 2, 4];
// 2는 1+1, 2
// 3은 1+1+1, 2+1, 1+2, 3+1, 1+3

for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

let answer = "";

for (let i = 1; i < input.length; i++) {
  const n = input[i];
  answer += dp[n] + "\n";
}
console.log(answer);

// 1,2,3 의 조합을 통해 숫자르 구성함
// 10이 최대값임

// 앞에서 이미 순서대한 모든 고려가 되어있기때문에
// 맨 뒤에 1,2,3을 붙히는 형식으로 확장해가는 방식임

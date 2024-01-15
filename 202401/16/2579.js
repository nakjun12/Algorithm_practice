const input = require("fs")
  .readFileSync("202401/16/2579.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const num = input[0];
const stairs = input.slice(1); // 1번째 칸은 index 0
const dp = Array(num).fill(0);
console.log(stairPt());

function stairPt() {
  if (num === 1) return stairs[0];
  if (num === 2) return stairs[0] + stairs[1];
  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

  for (let i = 3; i < num; i++) {
    dp[i] = Math.max(
      dp[i - 2] + stairs[i],
      dp[i - 3] + stairs[i - 1] + stairs[i]
    );
  }
  return dp[num - 1];
}

//   계단은 한 번에 한 계단씩 또는 두 계단씩 오를 수 있다.
// 연속된 세 개의 계단을 모두 밟아서는 안 된다. 단, 시작점은 계단에 포함되지 않는다.
// 마지막 도착 계단은 반드시 밟아야 한다.

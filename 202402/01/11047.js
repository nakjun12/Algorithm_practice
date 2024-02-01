//11047 동전 0

const input = require("fs")
  .readFileSync("202402/01/11047.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);
let cnt = 0;
for (let i = N - 1; i >= 0; i--) {
  if (K >= coins[i]) {
    cnt += Math.floor(K / coins[i]);
    K %= coins[i];
  }
}
console.log(cnt);

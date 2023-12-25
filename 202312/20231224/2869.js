const input = require("fs")
  .readFileSync("202312/20231224/2869.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [a, b, v] = input;

const remaining = v - a;
const dailyClimb = a - b;

const days = Math.ceil(remaining / dailyClimb) + 1;

console.log(days);

//1번 처음에 도달할 수 있으니 이를 먼저 빼준다.
//2번 빼고 움직인 것을 기준으로 나누어주면 거기에 더한다.

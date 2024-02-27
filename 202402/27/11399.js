//ATM

const input = require("fs")
  .readFileSync("202402/27/11399.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const peopleTime = input[1].split(" ").map(Number);

peopleTime.sort((a, b) => a - b);

let answer = 0;
let value = 0;
for (let i = 0; i < n; i++) {
  value += peopleTime[i];
  answer += value;
}

console.log(answer);

// 3
// 3+1
// 3+1+4
// 3+1+4+3
// 3+1+4+3+2

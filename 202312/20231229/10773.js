const input = require("fs")
  .readFileSync("202312/20231229/10773.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let numArr = input.slice(1).map(Number);

let sum = [];
for (let num of numArr) {
  if (num !== 0) sum.push(num);
  else {
    sum.pop();
  }
}

console.log(sum.reduce((c, e) => c + e, 0));

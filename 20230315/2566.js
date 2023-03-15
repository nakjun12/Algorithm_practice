const input = require("fs")
  .readFileSync("20230315/example8.txt")
  .toString()
  .trim()
  .split("\n");
let max = -1;
let row = 0;
let column = 0;
for (let i = 0; i < input.length; i++) {
  let rowArray = input[i].split(" ").map(Number);
  let big = Math.max(...rowArray);
  if (big > max) {
    max = big;
    row = i + 1;
    column = rowArray.indexOf(big) + 1;
  }
}

console.log(max);
console.log(row, column);

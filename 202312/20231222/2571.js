const input = require("fs")
  .readFileSync("202312/20231222/2571.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let [n, ...arr] = input;

// console.log(n, arr);

console.log(arr.sort((a, b) => a - b).join(`\n`));

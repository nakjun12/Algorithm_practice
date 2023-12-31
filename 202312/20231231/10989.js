const input = require("fs")
  .readFileSync("202312/20231231/10989.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input[0];
const numCheck = new Array(10001).fill(0);
const arr = input.slice(1);

arr.forEach((n) => {
  numCheck[n] += 1;
});

let output = "";
numCheck.forEach((n, i) => {
  if (n > 0) {
    for (let j = 0; j < n; j++) output += i + "\n";
  }
});

console.log(output.trim());

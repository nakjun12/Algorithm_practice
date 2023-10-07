const input = require("fs")
  .readFileSync("20230319/Inflearn/example4.txt")
  .toString()
  .trim()
  .split("\n");

let num = input.slice(0, 1);
let numArray = input.slice(1)[0].split(" ").map(Number);
let count = 0;
let result = 0;

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] === 0) {
    count = 0;
    continue;
  }
  count++;
  result = result + count;
}

console.log(result);

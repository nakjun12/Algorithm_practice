const input = require("fs")
  .readFileSync("20230319/Inflearn/example2.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
let numArray = input.splice(1)[0].split(" ").map(Number);
let max = numArray[0];
let count = 1;

for (let i = 1; i < numArray.length; i++) {
  if (numArray[i] > max) {
    max = numArray[i];
    count++;
  }
}
console.log(count);

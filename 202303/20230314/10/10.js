var input = require("fs")
  .readFileSync("20230314/10/example.txt")
  .toString()
  .split("\n");

console.log(input);

let inputArray = input[0].split("");
let alphabet = input[1];
let count = 0;

for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i] === alphabet) {
    count += 1;
  }
}

console.log(count);

var input = require("fs")
  .readFileSync("20230314/13/example.txt")
  .toString()
  .split("\n");

console.log(input);

let inputArray = input[0].split("");
let result = "";
// for (let i = 0; i < inputArray.length; i++) {
//   if (inputArray[i] === inputArray.toLowerCase()) {
//     console.log(inputArray[i]);
//   }

for (let i of inputArray) {
  if (i === i.toLowerCase()) {
    result += i.toUpperCase();
  } else {
    result += i.toLowerCase();
  }
}

console.log(result);

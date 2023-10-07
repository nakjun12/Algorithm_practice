var input = require("fs")
  .readFileSync("20230314/15/example2.txt")
  .toString()
  .split("\n");

console.log(input[0].length);
console.log(Math.round(input[0].length / 2) - 1);

let num = Math.round(input[0].length / 2) - 1;
if (input[0].length % 2 === 0) {
  console.log(input[0].slice(num, num + 2));
} else {
  console.log(input[0].slice(num, num + 1));
}

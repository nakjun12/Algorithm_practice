var input = require("fs")
  .readFileSync("20230314/example.txt")
  .toString()
  .split(" ");

console.log(input);
let result = 0;
let min = Number.MAX_SAFE_INTEGER;

console.log(min);
for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 === 1) {
    result += Number(input[i]);
    if (input[i] < min) {
      min = input[i];
    }
  }
}
console.log(min);
console.log(result);

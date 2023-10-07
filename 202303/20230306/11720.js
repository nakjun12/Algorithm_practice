var input = require("fs")
  .readFileSync("20230306/example.txt")
  .toString()
  .split("\n");
let result = 0;

for (let i = 0; i < input[0]; i++) {
  result = result + Number(input[1][i]);
}
console.log(result);

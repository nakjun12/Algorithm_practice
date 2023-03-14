var input = require("fs")
  .readFileSync("20230314/7/example2.txt")
  .toString()
  .split("\n");

console.log(input);

const Num = input[0];
let ArrayNum = input[1].split(" ");
let result = 0;

for (let i = 0; i < ArrayNum.length; i++) {
  if (ArrayNum[i] % 10 === Number(Num)) {
    result += 1;
  }
}
console.log(result);

var input = require("fs")
  .readFileSync("20230314/11/example.txt")
  .toString()
  .split("\n");

console.log(input);

let inputArray = input[0].split("");
let count = 0;
for (let i = 0; i < inputArray.length; i++) {
  let codeASCII = inputArray[i].charCodeAt();

  if (codeASCII >= 65 && codeASCII <= 90) {
    count++;
  }
}
console.log(count);

//등식을 먼저쓰면 안된다

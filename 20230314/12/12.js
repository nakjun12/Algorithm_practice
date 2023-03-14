var input = require("fs")
  .readFileSync("20230314/12/example.txt")
  .toString()
  .split("\n");

console.log(input);

let inputArray = input[0].split("");
let result = "";
for (let i of inputArray) {
  let num = i.charCodeAt();

  if (num >= 97 && num <= 122) {
    result += String.fromCharCode(num - 32);
  } else {
    result += i;
  }
}
console.log(result);

//for of문에서 직접 i에 값을 할당했더니 되지않았다.

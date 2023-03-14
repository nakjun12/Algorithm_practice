var input = require("fs")
  .readFileSync("20230314/14/example.txt")
  .toString()
  .split("\n");

let num = input.splice(0, 1);
let longWord = "";
for (let i of input) {
  if (i.length > longWord.length) {
    longWord = i;
  }
}
console.log(longWord);

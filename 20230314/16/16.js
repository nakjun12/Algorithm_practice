var input = require("fs")
  .readFileSync("20230314/16/example.txt")
  .toString()
  .split("\n");

console.log(input);

let wordArray = input[0].split("");
let result = "";

// for (let i of wordArray) {
//   console.log(wordArray.indexOf(i));
//   console.log(i);
//   if (wordArray.indexOf(i) === i) {
//     result += i;
//   }
// } index 값을 쓸 수없음

for (let i = 0; i < wordArray.length; i++) {
  if (wordArray.indexOf(wordArray[i]) === i) {
    result += wordArray[i];
  }
}
console.log(result);

const input = require("fs")
  .readFileSync("20230319/Inflearn/example5.txt")
  .toString()
  .trim()
  .split("\n");

const numArray = input.slice(1)[0].split(" ").map(Number);
let sortArray = numArray.slice().sort((a, b) => b - a);

// let sortArray = numArray.sort((a, b) => a - b);
//sort는 mutable const 뚫음
//슬라이스로 다른 배열 생성

let result = [];

for (let i = 0; i < numArray.length; i++) {
  let rank = sortArray.indexOf(numArray[i]);
  result[i] = rank + 1;
}
console.log(result);

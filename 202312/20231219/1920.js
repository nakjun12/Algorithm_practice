const input = require("fs")
  .readFileSync("202312/20231219/1920.txt")
  .toString()
  .trim()
  .split("\n");

const [n, nArr, m, mArr] = input;

let setNArr = new Set(nArr.split(" "));
let splitMArr = mArr.split(" ");
let answer = [];
for (let i = 0; i < m; i++) {
  const cur = splitMArr[i];
  answer.push(setNArr.has(cur) ? 1 : 0);
}

console.log(answer.join("\n"));

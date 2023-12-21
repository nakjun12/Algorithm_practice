const input = require("fs")
  .readFileSync("202312/20231222/2292.txt")
  .toString()
  .trim()
  .split("\n");

let num = input[0] * 1;

let range = [];
let cnt = 0;
for (let i = 1; i < num; i += 6 * cnt) {
  cnt++;
  range.push(i);
}

console.log(range.length + 1);

//1 1
//2~7 2 6
//8~19 3 // 12
//20~37 4 // 18
//38~61 5 // 24
//[1, 7, 19, 37, 61...]

const input = require("fs")
  .readFileSync("202312/20231222/2609.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, m] = input;

let a = n;
let b = m;

while (b !== 0) {
  let r = a % b;
  a = b;
  b = r;
}

let max = (n * m) / a;

console.log(`${a}\n${max}`);

//1 1
//2~7 2 6
//8~19 3 // 12
//20~37 4 // 18
//38~61 5 // 24
//[1, 7, 19, 37, 61...]

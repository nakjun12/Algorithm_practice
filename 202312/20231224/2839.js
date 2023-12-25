const input = require("fs")
  .readFileSync("202312/20231224/2839.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);

function findMinimumBags(num) {
  for (let fiveBags = Math.floor(num / 5); fiveBags >= 0; fiveBags--) {
    const remaining = num - fiveBags * 5;
    if (remaining % 3 === 0) {
      return fiveBags + Math.floor(remaining / 3);
    }
  }
  return -1;
}

console.log(findMinimumBags(num));
// 3  5
//최소한,
// 18  3*6 x 5*3+3*1 o
// 안되면 -1

//1. 5로 나누고 0이거나 나머지를 3로 나눔
//2. 위가 안될 시, 3으로 나누고 나머지가 0이면 ok
//3. 3가지가 안되면 -1

const input = require("fs")
  .readFileSync("202312/20231221/2231.txt")
  .toString()
  .trim()
  .split("\n");

const num = input[0] * 1;
const arr = [];
for (let i = 1; i <= num; i++) {
  let cur = i;
  let sum = 0;
  while (cur > 0) {
    let val = cur % 10;
    sum += val * 1;
    cur = Math.floor(cur / 10);
  }
  //   console.log(sum, i);
  if (sum + i === num) {
    arr.push(i);
    break;
  }
}

console.log(arr[0] ? arr[0] : 0);

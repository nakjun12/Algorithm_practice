const input = require("fs")
  .readFileSync("202312/20231221/2164.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input);
let arr = Array.from({ length: num }, (a, i) => i + 1);

while (arr.length > 1) {
  console.log(arr.length);
  if (arr.length % 2 === 0) {
    arr = arr.filter((e, i) => i % 2 === 1);
  } else {
    let backup = arr.pop();
    arr = arr.filter((e, i) => i % 2 === 1);
    arr.unshift(backup);
  }
}
console.log(arr[0]);

//짝수일떄는 2n번쨰 항만 남음
//홀수 일때는 나머지가 맨 앞으로 오고, 2n번째항만 남음

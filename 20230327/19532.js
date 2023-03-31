const input = require("fs")
  .readFileSync("20230327/example.txt")
  .toString()
  .trim()
  .split("\n");

let [a, b, c, d, e, f] = input[0].split(" ").map(Number);

for (let i = -999; i < 1000; i++) {
  for (let j = -999; j < 1000; j++) {
    if (a * i + b * j === c && d * i + e * j === f) console.log(i, j);
  }
}

// let first = numArray.slice(0, 3);
// let second = numArray.slice(3, 6);

// let numFirst = first[0];
// let numSecond = second[0];

// first = first.map((x) => x * numSecond);
// second = second.map((x) => x * numFirst);

// let numY = first[1] - second[1];
// let numConstant = first[2] - second[2];

// let resultY = numConstant / numY;

// console.log(first, numY, numConstant);
// first = numArray.slice(0, 3);

// let resultX = resultY * first[1] * -1 + first[2];
// resultX = resultX / first[0];
// console.log(resultX, resultY); 0을 고려하지못함

// second = numArray.slice(3, 6);
// let result = resultY * second[1] * -1 + second[2];
// result = result / second[0];

// console.log(result, second);

// '/dev/stdin'
// [Solved✌🏻]낙준_최대, 최소
// - 빼야함
//
// BOJ_10818_N.java
// x+3y=-1
// 4x+y=7

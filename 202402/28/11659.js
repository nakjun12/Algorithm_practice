//구간합 구하기 4

const input = require("fs")
  .readFileSync("202402/28/11659.txt")
  .toString()
  .trim()
  .split("\n");

const [numCount, turnCount] = input[0].split(" ").map(Number);
let numArr = input[1].split(" ").map(Number);
const rangeArr = input.slice(2).map((e) => e.split(" ").map(Number));
let answer = "";

for (let order = 1; order < numCount; order++) {
  numArr[order] += numArr[order - 1];
}

rangeArr.forEach(([a, b]) => {
  answer +=
    a === 1 ? numArr[b - 1] + "\n" : numArr[b - 1] - numArr[a - 2] + "\n";
});

console.log(answer);

// 누적합이라는 것은
// 이전합한 값에서 전에 합한 값을 빼면 됨

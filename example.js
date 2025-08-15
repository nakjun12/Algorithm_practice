const input = require("fs")
  .readFileSync("20230319/Inflearn/example.txt")
  .toString()
  .trim()
  .split("\n"); //  .split(/\s+/)
const log = console.log;
log(input);

// 제출하는 경우 아래로 변경
// '/dev/stdin'

// 가급적 함수형으로 풀 것

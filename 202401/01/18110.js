const input = require("fs")
  .readFileSync("202401/01/18110.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input[0];
const round = Math.round(n * 0.15);
const arr = input.slice(1).sort((a, b) => a - b);
const res = arr.slice(round, arr.length - round);

const answer =
  res.length > 0
    ? Math.round(res.reduce((cur, el) => cur + el, 0) / res.length)
    : 0;

console.log(answer);

// 아직 아무 의견이 없다면 문제의 난이도는 0으로 결정한다.
// 의견이 하나 이상 있다면, 문제의 난이도는 모든 사람의 난이도 의견의 30% 절사평균으로 결정한다.
//JavaScript에서 정수 연산은 Number.MAX_SAFE_INTEGER 이상의 값에서 정확도가 떨어집니다.
//이를 방지하기 위해 유한한 범위에서 나누어주어야한다.

//30% 절사 평균
// 25명이 투표한 경우 위, 아래에서 각각 3.75명을 제외해야 하는데, 이 경우 반올림해 4명씩을 제외한다.

// 마지막으로, 계산된 평균도 정수로 반올림된다. 절사평균이 16.7이었다면 최종 난이도는 17이 된다.

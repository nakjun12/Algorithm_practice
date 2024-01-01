const input = require("fs")
  .readFileSync("202401/01/15829.txt")
  .toString()
  .trim()
  .split("\n");

const M = 1234567891;
const r = 31;
let n = Number(input[0]);
let word = input[1].split("");

let answer = 0;
let rPow = 1; // r의 i제곱을 계산하기 위한 변수

for (let i = 0; i < n; i++) {
  answer = (answer + (word[i].charCodeAt() - 96) * rPow) % M; // 일정 범위 넘는지 꾸준히 체크
  rPow = (rPow * r) % M; // 다음 루프를 위해 r의 거듭제곱을 업데이트
}

console.log(answer);

//JavaScript에서 정수 연산은 Number.MAX_SAFE_INTEGER 이상의 값에서 정확도가 떨어집니다.
//이를 방지하기 위해 유한한 범위에서 나누어주어야한다.

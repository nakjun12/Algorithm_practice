const input = require("fs")
  .readFileSync("20230319/Inflearn/example6.txt")
  .toString()
  .trim()
  .split("\n");
let numArray = input.map((el) => el.split(" ").map(Number));
let n = numArray.splice(0, 1); //1번 값을 뺴버림
let sum1 = (sum2 = 0);
let answer = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  sum1 = sum2 = 0;
  for (let j = 0; j < n; j++) {
    sum1 += numArray[i][j];
    sum2 += numArray[j][i];
  }
  answer = Math.max(answer, sum1, sum2);
} //일직선 값 계산

sum1 = sum2 = 0;
for (let i = 0; i < n; i++) {
  sum1 += numArray[i][i]; //대각선 1
  sum2 += numArray[i][n - i - 1]; // 1빼주는 이유는 4부터 시작하기 위함
}
answer = Math.max(answer, sum1, sum2);

console.log(answer);
//프리티어 린트 설정만지기

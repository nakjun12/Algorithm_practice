const input = require("fs")
  .readFileSync("202401/22/5525.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const S = input[2];

let answer = 0;
let patternCount = 0;

for (let i = 0; i < M - 2; i++) {
  if (S[i] === "I") {
    let j = i;
    while (j < M - 2 && S[j + 1] === "O" && S[j + 2] === "I") {
      //연달아 있는거까지 검사함
      patternCount++;
      j += 2;
      if (patternCount === N) {
        answer++;
        patternCount--;
        //처음 것을 빼줌으로서 추가적인 검증이 가능함
      }
    }
    patternCount = 0;
    i = j; // 이미 겹치는 것들은 다 검사했기떄문에 건너뜀
  }
}
console.log(answer);

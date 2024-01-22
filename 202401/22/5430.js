const input = require("fs")
  .readFileSync("202401/22/5430.txt")
  .toString()
  .trim()
  .split("\n");

//함수 R은 배열에 있는 수의 순서를 뒤집는 함수이고,
//D는 첫 번째 수를 버리는 함수이다. 배열이 비어있는데 D를 사용한 경우에는 에러가 발생한다.

let answer = "";
let testNum = Number(input[0]);

for (let i = 0; i < testNum; i++) {
  let funtions = input[i * 3 + 1];
  let arr = JSON.parse(input[i * 3 + 3]);

  let isReverse = false;
  let isError = false;
  let start = 0;
  let end = arr.length;

  for (const fn of funtions) {
    if (fn === "R") {
      isReverse = !isReverse;
    } else if (fn === "D") {
      if (start === end) {
        isError = true;
        break;
      }

      if (isReverse) {
        end--;
      } else {
        start++;
      }
    }
  }

  if (isError) answer += `error\n`;
  else {
    let finalArr = arr.slice(start, end);
    if (isReverse) finalArr.reverse();
    answer += `${JSON.stringify(finalArr)}\n`;
  }
}
console.log(answer);

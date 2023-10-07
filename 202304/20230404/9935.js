const input = require("fs")
  .readFileSync("20230404/example1.txt")
  .toString()
  .trim()
  .split("\n");
const log = console.log;

const solution2 = (input) => {
  const [string, target] = input;
  const targetL = target.length;
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    if (target[targetL - 1] === string[i]) {
      let flag = true;
      for (let j = 1; j < targetL; j++) {
        if (target[targetL - 1 - j] !== stack[stack.length - j]) {
          flag = false;

          stack.push(string[i]); //같긴하나 달라서 넣어줌
          break;
        }
      }
      if (flag) {
        // 안넣어줬으니 애들을 빼줌
        let count = targetL - 1;
        while (count--) stack.pop();
      }
    } else {
      //일단 다르면 넣어줌

      stack.push(string[i]);
    }
  }

  log(stack.length > 0 ? stack.join("") : "FRULA");
};
solution2(input);
//하나씩 하나씩 넣어줌

//replace, split은 용량이 크다.
//replace는 안뱉음
//수가 줄어듬
// if (empty.length === 0) {
//   console.log("FRULA");
// }
// '/dev/stdin'
// [Solved✌🏻]낙준_최대, 최소

// BOJ_10818_N.java

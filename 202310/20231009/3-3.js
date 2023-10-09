function solution(word) {
  let answer = "";
  for (let i of word) {
    if (!isNaN(i)) answer += i; //숫자를 구분
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

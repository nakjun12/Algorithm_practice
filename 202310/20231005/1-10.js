// function solution(s, t) {
//   let answer = s.split(t).length;
//   return answer - 1;
// }

function solution(s, t) {
  let answer = 0;
  for (alpha of s) {
    if (t === alpha) answer++;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

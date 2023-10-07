function solution(arr) {
  let answer = "";
  for (let word of arr) {
    answer = answer.length > word.length ? answer : word;
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

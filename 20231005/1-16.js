function solution(s) {
  //   let answer = "";
  //   for (let word of s) {
  //     console.log(answer.indexOf(word) === -1 && word);
  //     answer += answer.indexOf(word) === -1 ? word : "";
  //   }

  //   return answer;

  let wordSet = new Set(s);
  return [...wordSet].join("");
}
console.log(solution("ksekkset"));

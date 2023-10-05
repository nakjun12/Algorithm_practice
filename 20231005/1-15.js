function solution(word) {
  let char = word.split("");
  // 5/2 2.5 6/2 3
  // 7/2 3.5 10/2 5
  char.length % 2;
  let num = Math.ceil(char.length / 2) - 1;
  let result =
    char.length % 2 === 0 ? char.slice(num, num + 2) : char.slice(num, num + 1);
  return result.join("");
}

//sub.str
console.log(solution("study"));
console.log(solution("studyy"));

//  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
//if(s.length%2===1) answer=s.substr(mid, 1);

//slice가 배열에도 가능하고 유연하므로 slice를 익히자
//sub str은 사라지는 추세

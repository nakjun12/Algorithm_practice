function solution(word) {
  let answer = "";
  //   let cnt = 1;
  //   answer += word[0];
  //   for (let i = 1; i < word.length; i++) {
  //     if (word[i] === word[i - 1]) cnt++;
  //     else {
  //       if (cnt > 1) answer += cnt;
  //       answer += word[i];
  //       cnt = 1;
  //     }
  //   }

  let cnt = 1;
  word = word + " "; //마지막 고려한 추가
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) cnt++;
    else {
      answer += word[i];
      if (cnt > 1) answer += cnt;
      cnt = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));

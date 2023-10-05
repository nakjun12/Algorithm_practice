//대문자 찾기

function solution(word) {
  let answer = 0;

  let x = word.charCodeAt(); //외울 것
  if (x >= 65 && x <= 90) answer++;
  // if(x===x.toUpperCase()) answer++
  return answer;
}

console.log(solution("KoreaTimeGood"));
//toLowerCase();

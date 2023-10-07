function solution(arr) {
  let answer = 100;
  for (let i = 0; i < 3; i++) {
    answer = answer > arr[i] ? arr[i] : answer;
  }
  return answer;
}
let arr = [6, 5, 11];
console.log(solution(arr));

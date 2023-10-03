function solution(arr) {
  let answer = 0;
  let num = arr.length;
  let DY = Array.from({ length: num }, () => 0);
  DY[0] = 1;
  for (let i = 1; i < num; i++) {
    let max = 0; // 포인트
    for (let k = i - 1; k >= 0; k--) {
      if (arr[i] > arr[k] && DY[k] > max) {
        max = DY[k];
      }
    }
    DY[i] = max + 1; //포인트
    answer = Math.max(answer, DY[i]);
  }
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));

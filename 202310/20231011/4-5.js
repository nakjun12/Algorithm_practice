function solution(a, b, arr) {
  let num = arr.length;
  let answer = new Set();
  // 중복값을 쳐내고 올바른 수를 갖기 위해 사용
  for (let i = 0; i < num; i++) {
    //같은 수 안겹치게하는 고려가 필요함
    for (let k = i + 1; k < num; k++) {
      for (let j = k + 1; j < num; j++) {
        let sum = arr[i] + arr[j] + arr[k];
        answer.add(sum);
      }
    }
  }
  answer = Array.from(answer).sort((a, b) => b - a);

  return answer[b - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

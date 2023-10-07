function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER; // 초기값을 가장 작은 안전한 정수로 설정
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    let colSum = 0;

    for (let j = 0; j < n; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }

    answer = Math.max(answer, rowSum, colSum); // 더 큰 값으로 업데이트
  }

  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < n; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][n - 1 - i];
  }

  answer = Math.max(answer, diagonal1, diagonal2); // 대각선 합과 비교하여 더 큰 값으로 업데이트

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];
console.log(solution(arr));

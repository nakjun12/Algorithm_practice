function solution(arr) {
  let answer = 0;
  let num = arr.length;
  let dx = [1, 0, -1, 0]; //4방위 기억할 것
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < num; i++) {
    for (let k = 0; k < num; k++) {
      let flag = 1; //플래그 쓰는 이유 on/off  조건에 안맞으면 off인 것을 활용
      for (let j = 0; j < 4; j++) {
        let nx = dx[j] + arr[i][k];
        let ny = dy[j] + arr[i][k];

        if (
          nx >= 0 &&
          nx < num &&
          ny >= 0 &&
          ny < num &&
          arr[i][k] < arr[nx][ny]
        ) {
          // 조건문 설정
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];
console.log(solution(arr));

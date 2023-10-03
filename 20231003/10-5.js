function solution(m, arr) {
  let answer = 0;
  let DY = Array.from({ length: m + 1 }, () => 0);
  let num = arr.length;
  for (let i = 0; i < num; i++) {
    let PS = arr[i][0];
    let PT = arr[i][1];

    for (let k = m; k >= PT; k--) {
      console.log(DY[k], DY[k - PT] + PS);
      DY[k] = Math.max(DY[k], DY[k - PT] + PS);
    }
    console.log(DY);
  }

  return DY[m];
}

let arr = [
  [7, 4],
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3]
];
console.log(solution(20, arr));

//앞에 동전과 다르게 한번 밖에 못풀어서 내려가면서 계산해줌

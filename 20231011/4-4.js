function solution(money, arr) {
  let s = arr.length;
  let max = 0;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); //저렴한 것부터 넣어야함
  let sumArr = arr.map((item) => item[0] + item[1]);
  for (let i = 0; i < s; i++) {
    let check = 1;
    let sum = money - (arr[i][0] / 2 + arr[i][1]); // 빼주는 방식으로 비교함

    for (let k = 0; k < s; k++) {
      if (k === i) continue;

      if (sum >= sumArr[k]) {
        check++;
        sum = sum - sumArr[k];
      } else if (sum < sumArr[k] && max < check) {
        max = check;
        break;
      }
    }
  }

  return max;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3]
];
console.log(solution(28, arr));

//로직을 구상하고 하자

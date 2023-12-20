// 산술평균 : N개의 수들의 합을 N으로 나눈 값
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값  소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이
//첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 단, N은 홀수이다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
//그 다음 N개의 줄에는 정수들이 주어진다. 입력되는 정수의 절댓값은 4,000을 넘지 않는다.
const input = require("fs")
  .readFileSync("202312/20231220/2108.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let numArr = input.slice(1);
let n = numArr.length;
let cnt = {};
let sum = 0;

for (let num of numArr) {
  sum += num;
  cnt[num] = cnt[num] + 1 || 1;
}
let sortArr = [...numArr].sort((a, b) => a - b);

let average = Math.round(sum / n);
let center = sortArr[Math.floor(n / 2)]; // 5면 index 2 0 1 2 3 4
let range = sortArr[n - 1] - sortArr[0];

let frequency = Object.entries(cnt).sort(
  (a, b) => b[1] - a[1] || a[0] * 1 - b[0] * 1
);
let frequencyNum =
  frequency.length > 1 && frequency[0][1] === frequency[1][1]
    ? frequency[1][0] * 1
    : frequency[0][0] * 1;

console.log(`${average}\n${center}\n${frequencyNum}\n${range}\n`);

//1개가 들어오는 경우 모름

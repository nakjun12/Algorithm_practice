const input = require("fs")
  .readFileSync("202401/19/2805.txt")
  .toString()
  .trim()
  .split("\n");

const [treeNum, targetLength] = input[0].split(" ").map(Number);
const treeLengthArr = input[1].split(" ").map(Number);

let min = 0;
let max = Math.max(...treeLengthArr);
let result = 0;

while (min <= max) {
  let mid = Math.floor((max + min) / 2);
  let sum = treeLengthArr.reduce((acc, cur) => acc + Math.max(cur - mid, 0), 0);

  if (sum >= targetLength) {
    result = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(result);
// 일정 h만큼 자르고 나머지를 가져옴
// 원하는 양을 얻고 최대한 적게 자르는게 목표
//절단기에 설정할 수 있는 높이는 양의 정수 또는 0이다.
// 이진 탐색이 가장 빠르다

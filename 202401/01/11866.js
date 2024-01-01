const input = require("fs")
  .readFileSync("202401/01/11866.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, K] = input;

const people = Array.from({ length: n }, (e, i) => i + 1);
const result = [];
let index = 0;
// console.log(people);
while (people.length > 0) {
  index = (index + K - 1) % people.length; // K번째 사람을 찾기 위한 인덱스 계산
  console.log(index, people);
  result.push(people.splice(index, 1)[0]); // K번째 사람을 제거하고 결과에 추가
}

console.log("<" + result.join(", ") + ">");

// 배열을 만든다, index를 저장함
// 이후 스텍형식
//사람 찾는 알고리즘 순서 찾는게 중요함

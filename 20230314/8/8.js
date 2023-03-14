var input = require("fs")
  .readFileSync("20230314/8/example.txt")
  .toString()
  .split("\n");

input = input[0].split(" ").map((el) => Number(el));
let sum = input.reduce((a, b) => a + b, 0);
console.log(input);
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j + 1 < input.length; j++) {
    let twoSum = input[i] + input[j];
    if (twoSum === 40) {
      input.splice(j, 1);
      input.splice(i, 1);
    }
  }
}
console.log(input);

//다 더한 다음에 2개씩 합친 값을 뺴고 100이 되는 것을 찾자
//reduce, splice 쓰자 splice는 기존의 것을 변하게함 mutable
//실수 합친값을 갯수로 놓음
// j자리에 i 넣음
//비효율적으로 돌게 놔뒀음
// j=0 이아니라 겹치는 거 없이 j= i+1로 놓아야 효율적임

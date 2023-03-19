var input = require("fs")
  .readFileSync("20230319/example.txt")
  .toString()
  .trim()
  .split("\n");

let num = input.shift();

for (let i of input) {
  let NumArray = i
    .split(" ")
    .map(Number)
    .sort((a, b) => {
      return a - b;
    });
  let small = NumArray[0];
  let big = NumArray[1];
  while (big % small !== 0) {
    let rest = big % small;
    big = small;
    small = rest;
  }
  let result = (NumArray[1] * NumArray[0]) / small;
  console.log(result);
}

//6 10
//10>6
//10/6=1..4
//6/4=1..2
//4/2=2..0
//2

//13 17
// 17>13
// 17/13= 1..4
// 13/4=3..1
// 3/1=1..0
//1

//20, 10
//20>10
//20/10 = 2..0
//10
//200
//20
//나머지가 0일때 몫이됨

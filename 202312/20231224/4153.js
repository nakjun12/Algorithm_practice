const input = require("fs")
  .readFileSync("202312/20231224/4153.txt")
  .toString()
  .trim()
  .split("\n");

let triArr = input.slice(0, input.length - 1);
for (let tri of triArr) {
  console.log(triangleCheck(tri.split(" ").map(Number)));
}
function triangleCheck(arr) {
  let [a, b, c] = arr.sort((a, b) => a - b);
  return a * a + b * b === c * c ? "right" : "wrong";
}

//식이 여러개이니 함수를 만들어준다.
// a*a +b*b =c*c

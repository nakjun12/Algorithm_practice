let input = require("fs")
  .readFileSync("20230319/Inflearn/example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0].split(" ").map(Number);
let result = [];
result.push(input[0]);

for (let i = 1; i < input.length; i++) {
  if (input[i] > input[i - 1]) {
    result.push(input[i]);
  }
}
console.log(result.join(" "));

//앞뒤 비교하고 결과값을 남긴다.

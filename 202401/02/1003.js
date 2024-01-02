const input = require("fs")
  .readFileSync("202401/02/1003.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let numArr = input.slice(1);

let fibonacci0and1 = Array.from({ length: 41 }, () => [0, 0]);
fibonacci0and1[0][0] = 1;
fibonacci0and1[1][1] = 1;

for (let i = 2; i <= 40; i++) {
  fibonacci0and1[i][0] = fibonacci0and1[i - 1][0] + fibonacci0and1[i - 2][0];
  fibonacci0and1[i][1] = fibonacci0and1[i - 1][1] + fibonacci0and1[i - 2][1];
}
let output = "";
for (let i = 0; i < input[0]; i++) {
  output += fibonacci0and1[numArr[i]].join(" ") + "\n";
}
console.log(output.trim());

const input = require("fs")
  .readFileSync("20230319/Inflearn/example3.txt")
  .toString()
  .trim()
  .split("\n");

let first = input.slice(1, 2)[0].split(" ").map(Number);
let second = input.slice(2)[0].split(" ").map(Number);

let result = [];

for (let i = 0; i < input[0]; i++) {
  if (first[i] === second[i]) {
    result[i] = "D";
  } else if (first[i] === 2 && second[i] === 1) {
    result[i] = "A";
  } else if (first[i] === 3 && second[i] === 2) {
    result[i] = "A";
  } else if (first[i] === 1 && second[i] === 3) {
    result[i] = "A";
  } else {
    result[i] = "B";
  }
  console.log(result[i]);
}

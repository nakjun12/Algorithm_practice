const input = require("fs")
  .readFileSync("202312/20231224/2798.txt")
  .toString()
  .trim()
  .split("\n");

let [n, t] = input[0].split(" ").map(Number);
let cards = input[1].split(" ").map(Number);

let answer = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum <= t && sum > answer) answer = sum;
    }
  }
}

console.log(answer);

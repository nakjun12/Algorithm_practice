const input = require("fs")
  .readFileSync("202401/23/6064.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const calendar = input.slice(1).map((e) => e.split(" ").map(Number));

let answer = "";
for (let [M, N, x, y] of calendar) {
  let res = findYear(M, N, x, y);
  answer += `${res}\n`;
}

function findYear(M, N, x, y) {
  let maxYear = lcm(M, N);
  for (let i = x; i <= maxYear; i += M) {
    if ((i - y) % N === 0) return i;
  }
  return -1;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(answer);

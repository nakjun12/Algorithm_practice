const input = require("fs")
  .readFileSync("202401/01/11050.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, k] = input;

console.log(factorial(n) / (factorial(k) * factorial(n - k)));

function factorial(n) {
  let value = 1;
  for (let i = n; i > 1; i--) {
    value = value * i;
  }
  return value;
}

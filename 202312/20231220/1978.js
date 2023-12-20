const input = require("fs")
  .readFileSync("202312/20231220/1978.txt")
  .toString()
  .trim()
  .split("\n");

let [n, numbers] = input;

let arr = numbers.split(" ").map(Number);
let cnt = 0;
for (let num of arr) {
  if (isPrime(num)) cnt++;
}

function isPrime(num) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(cnt);

const input = require("fs")
  .readFileSync("202312/20231220/1929.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [first, end] = input;
for (let i = first; i <= end; i++) {
  if (isPrime(i)) console.log(`${i}`);
}

function isPrime(num) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

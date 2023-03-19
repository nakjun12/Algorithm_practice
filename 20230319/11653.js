let input = require("fs")
  .readFileSync("20230319/example3.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
let isPrima = true;

for (let i = 0; i < Math.floor(Math.sqrt(num)); i++) {
  if (num % i === 0) {
    isPrima = false;
  }
}

console.log(isPrima);

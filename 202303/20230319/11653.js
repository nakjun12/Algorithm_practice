const input = require("fs")
  .readFileSync("20230319/example3.txt")
  .toString()
  .trim();

var answer = [];
var result = input;
for (var i = 2; i <= input; i++) {
  var num = i;

  while (result % num === 0) {
    answer.push(num);
    if (result / num === 1) break;
    result = result / num;
  }
}

console.log(answer.join("\n").trim());

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// var num = parseInt(input[0]);

// var i = 2;
// var primes = []
// while (true) {
//   if (num % i === 0) {
//     num = num / i
//     primes.push(i)
//     i = 1;
//   }
//   i++;
//   if (i > num) {
//     break;
//   }
// }

// console.log(primes.join("\n"));

// let isPrimaArray = [];
// let result = [];
// for (let j = 2; j < num; j++) {
//   let isPrima = true;
//   for (let i = 2; i <= Math.floor(Math.sqrt(j)); i++) {
//     if (j % i === 0) {
//       isPrima = false;
//       break;
//     }
//   } //소수 거름

//   if (isPrima) {
//     isPrimaArray.push(j);
//   }
// }

// while (num !== 1) {
//   if (num % isPrimaArray[0] !== 0) {
//     isPrimaArray.shift();
//   } else {
//     num = num / isPrimaArray[0];

//     result.push(isPrimaArray[0]);
//   }
// }

// for (let i of result) {
//   console.log(i);
// }

// 36/2 18/2 9
// 18/2 9
// 9/2 4...1

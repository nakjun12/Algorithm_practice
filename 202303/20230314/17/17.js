var input = require("fs")
  .readFileSync("20230314/17/example.txt")
  .toString()
  .split("\n");

let num = input.splice(0, 1);
console.log(num);

console.log(input);
// for (let i = 0; i < input.length; i++) {
//   if (input.indexOf(input[i]) === i) {
//     console.log(input[i]);
//   }
// }

let result = input.filter((el, index) => {
  if (input.indexOf(el) === index) {
    return true;
  }
});
console.log(result.join("\n"));

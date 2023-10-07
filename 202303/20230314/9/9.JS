var input = require("fs")
  .readFileSync("20230314/9/example.txt")
  .toString()
  .split("\n");

console.log(input[0].split(""));

let word = input[0].split("");

for (let i = 0; i < word.length; i++) {
  if (word[i] === "A") word[i] = "#";
}
console.log(word.join(""));

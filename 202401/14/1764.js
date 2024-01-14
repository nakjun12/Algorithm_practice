const input = require("fs")
  .readFileSync("202401/14/1764.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const nArr = input.slice(1, n + 1);
const mArr = new Set(input.slice(n + 1));

const answer = nArr.filter((name) => mArr.has(name)).sort();

console.log([answer.length, ...answer].join("\n"));

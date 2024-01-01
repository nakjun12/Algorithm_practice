const input = require("fs")
  .readFileSync("202401/01/11651.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const n = input[0][0];

const point = input
  .slice(1)
  .sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  })
  .map((e) => e.join(" "))
  .join("\n");

console.log(point);

const input = require("fs")
  .readFileSync("202312/20231229/7568.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

const people = input.slice(1).map((e) => e.split(" ").map(Number));
const ranking = new Array(num).fill(1);

for (let i = 0; i < num - 1; i++) {
  for (let j = i + 1; j < num; j++) {
    if (people[i][0] > people[j][0] && people[i][1] > people[j][1]) {
      ranking[j]++;
    } else if (people[j][0] > people[i][0] && people[j][1] > people[i][1]) {
      ranking[i]++;
    }
  }
}
console.log(ranking.join(" "));

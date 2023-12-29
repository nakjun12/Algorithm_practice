const input = require("fs")
  .readFileSync("202312/20231229/10814.txt")
  .toString()
  .trim()
  .split("\n");

input
  .slice(1)
  .map((e, i) => {
    let [age, name] = e.split(" ");
    return { age: Number(age), name, i };
  })
  .sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age;
    return a.i - b.i;
  })
  .map((e) => console.log(`${e.age} ${e.name}`));

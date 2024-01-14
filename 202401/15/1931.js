const input = require("fs")
  .readFileSync("202401/15/1931.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

const meetings = input.slice(1).map((e) => e.split(" ").map(Number));

meetings.sort(([s1, e1], [s2, e2]) => {
  if (e1 !== e2) return e1 - e2;
  return s1 - s2;
});

let cnt = 0;
let lastTime = 0;

for (let i = 0; i < num; i++) {
  const [s, e] = meetings[i];
  if (lastTime <= s) {
    cnt++;
    lastTime = e;
  }
}

console.log(cnt);

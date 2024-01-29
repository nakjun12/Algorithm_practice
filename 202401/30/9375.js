const input = require("fs")
  .readFileSync("202401/30/9375.txt")
  .toString()
  .trim()
  .split("\n");

const turn = parseInt(input[0]);
let index = 1;

let answer = "";
for (let i = 0; i < turn; i++) {
  let cnt = parseInt(input[index]);
  let clothes = {};

  index++;

  for (let j = 0; j < cnt; j++) {
    let [_, type] = input[index].split(" ");
    index++;

    if (!clothes[type]) clothes[type] = 1;
    //안 입는 경우 고려하여 1부터 시작
    clothes[type] += 1;
  }

  const combi = Object.values(clothes).reduce((acc, cur) => acc * cur, 1) - 1;
  // 알몸 제외 해주어서 -1
  answer += combi + "\n";
}
console.log(answer);

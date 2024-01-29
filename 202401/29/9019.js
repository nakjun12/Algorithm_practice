const input = require("fs")
  .readFileSync("202401/29/9019.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
let arr = input.slice(1).map((e) => e.split(" ").map(Number));

function commandD(num) {
  return (2 * num) % 10000;
}
function commandS(num) {
  return num === 0 ? 9999 : num - 1;
}
function commandL(num) {
  return Math.floor((num % 1000) * 10 + num / 1000);
}
function commandR(num) {
  return Math.floor((num % 10) * 1000 + num / 10);
}

let answer = "";

for (let [start, target] of arr) {
  let visited = new Array(10000).fill(false);
  let queue = [[start, ""]];

  visited[start] = true;

  while (queue.length) {
    let [cur, command] = queue.shift();

    if (cur === target) {
      answer += command + "\n";
      break;
    }

    let D = commandD(cur);
    let S = commandS(cur);
    let L = commandL(cur);
    let R = commandR(cur);

    let DSLR = [
      [D, "D"],
      [S, "S"],
      [L, "L"],
      [R, "R"]
    ];

    for (let [n, addCommand] of DSLR) {
      if (!visited[n]) {
        visited[n] = true;
        queue.push([n, command + addCommand]);
      }
    }
  }
}

console.log(answer);
// S: S 는 n에서 1 을 뺀 결과 n-1을 레지스터에 저장한다. n이 0 이라면 9999 가 대신 레지스터에 저장된다.
// L: L 은 n의 각 자릿수를 왼편으로 회전시켜 그 결과를 레지스터에 저장한다. 이 연산이 끝나면 레지스터에 저장된 네 자릿수는 왼편부터 d2, d3, d4, d1이 된다.
// R: R 은 n의 각 자릿수를 오른편으로 회전시켜 그 결과를 레지스터에 저장한다. 이 연산이 끝나면 레지스터에 저장된 네 자릿수는 왼편부터 d4, d1, d2, d3이 된다.

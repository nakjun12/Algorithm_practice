const input = require("fs")
  .readFileSync("20230404/example2.txt")
  .toString()
  .trim()
  .split("\n");
const log = console.log;

let s = [];
let answer = -1;

function check(s, b, n) {
  s = Number(s.join(""));
  if (s.toString().length !== n) return -1;
  if (s < b && s > answer) answer = s;
}

function sol(A, b, visited) {
  console.log(A, s, visited);
  if (s.length === A.length) return check(s, b, A.length);

  for (let i = 0; i < A.length; i++) {
    if (!visited[i]) {
      s.push(A[i]);
      visited[i] = true;
      sol(A, b, visited);

      s.pop();

      visited[i] = false;
    }
  }
}

//T,T,T,T
//

function insert() {
  const input = [1234, 3456];
  let [a, b] = input.slice(0, 2);
  let A = a.toString().split("").map(Number);
  //console.log(A)
  let visited = new Array(A.length).fill(false);
  sol(A, b, visited);
  console.log(answer);
}
insert();

// n개고
// 1234 1243 1324 1342

// 4자리수 이고 하나씩 넣어봄
// '/dev/stdin'
// [Solved✌🏻]낙준_최대, 최소

// BOJ_10818_N.java

const input = require("fs")
  .readFileSync("20230404/example4.txt")
  .toString()
  .trim()
  .split("\n"); //  .split(/\s+/)

const log = console.log;

let [people, party] = input[0].split(" ").map(Number);
let [trueNum, ...trueMember] = input[1].split(" ").map(Number);
let partyTeam = [];
for (let i = 2; i < input.length; i++) {
  partyTeam.push(input[i].split(" ").map(Number));
}
let count = 0;

for (let i = 0; i < partyTeam.length; i++) {
  let isCheck = false;
  let num = partyTeam[i].shift();
  for (let j = 0; j < num; j++) {
    // log(trueMember, partyTeam[i][j]);
    if (trueMember.includes(partyTeam[i][j])) {
      for (let k = 0; k < partyTeam[i].length; k++) {
        if (!trueMember.includes(partyTeam[i][k])) {
          trueMember.push(partyTeam[i][k]);
        }
      }
      log(partyTeam[i][j], trueMember);
      isCheck = true;
      break;
    }
  }
  log(i, "coutn", isCheck);
  if (!isCheck) {
    log(i, "coutn");
    count++;
  }
}
log(count);

// '/dev/stdin'
// [Solved✌🏻]낙준_최대, 최소

// BOJ_10818_N.java

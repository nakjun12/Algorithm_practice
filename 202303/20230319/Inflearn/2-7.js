const input = require("fs")
  .readFileSync("20230319/Inflearn/example7.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]); //숫자
let numArray = input.slice(1).map((x) => x.split(" ").map(Number));
// let zeroArray = Array(num + 2).fill(0);
// for (let i of numArray) {
//   i.unshift(0);
//   i.push(0);
// }
// numArray.push(zeroArray);
// numArray.unshift(zeroArray);
// //세팅

// for(let i=1; i<numArray.length-1; i++){

// }
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let count = 0;
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    let isHigh = true;
    for (let k = 0; k < 4; k++) {
      let nx = i + dx[k];
      let ny = j + dy[k];
      if (
        nx >= 0 &&
        nx < num &&
        ny >= 0 &&
        ny < num &&
        numArray[i][j] <= numArray[nx][ny]
      ) {
        isHigh = false;
        break;
      }
    }
    if (isHigh) {
      count++;
    }
  }
}

console.log(count);

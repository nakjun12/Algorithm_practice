

const input = require("fs")
  .readFileSync("202312/20231210/1018.txt")
  .toString()
  .trim()
  .split("\n");

let [n,m] = input[0].split(" ").map(Number);
let board = input.slice(1);

function checkRepaints(x,y,firstColor){
  let repaintCount = 0;
  for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
      let color = (i+j)%2? firstColor : firstColor==="W"?"B" : "W";
      if(board[x+i][y+j]===color) repaintCount++;
    }
  }
  return repaintCount;
}
let min = Number.MAX_SAFE_INTEGER;
for(let i=0; i+7<n; i++){
  for (let j=0; j+7<m; j++){
      min = Math.min(checkRepaints(i, j, "W"), checkRepaints(i, j, "B"),min);
  }
}

console.log(min);
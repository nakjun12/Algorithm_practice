const input = require("fs")
  .readFileSync("202401/18/2630.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

const papers = input.slice(1).map((e) => e.split(" ").map(Number));
let white = 0,
  blue = 0;

function divide(x, y, size) {
  if (isOneColor(x, y, size)) {
    papers[y][x] === 1 ? blue++ : white++;
  } else {
    let newSize = size / 2;
    divide(x, y, newSize);
    divide(x + newSize, y, newSize);
    divide(x, y + newSize, newSize);
    divide(x + newSize, y + newSize, newSize);
  }
}

// function isOneColor(x, y, size) {
//   const onecolor = papers[y][x] === 0 ? 1 : 0;
//   for (let i = y; i < y + size; i++) {
//     if (papers[i].slice(x, x + size).indexOf(onecolor) !== -1) return false;
//   }
//   return true;
// }

function isOneColor(x, y, size) {
  const color = papers[y][x];
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (papers[i][j] !== color) return false; // 다른 색을 찾으면 즉시 반환
    }
  }
  return true; // 모든 셀이 같은 색이면 true 반환
}

divide(0, 0, papers.length);
console.log(`${white}\n${blue}`);
//4등분해서 다 같다면 안자른다
//검증하는 법은 1과 0이 포함되어있는지 확인하고 자름
//포함되어있다면 빼준다

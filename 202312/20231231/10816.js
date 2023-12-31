const input = require("fs")
  .readFileSync("202312/20231231/10816.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let M = Number(input[2]);
let Narr = input[1].split(" ").map(Number);
let Marr = input[3].split(" ").map(Number);
let cardCount = new Map();

for (let card of Narr) {
  cardCount.set(card, (cardCount.get(card) || 0) + 1);
}

const result = Marr.map((num) => cardCount.get(num) || 0);

console.log(result.join(" "));

//Map을 활용해서 객체로 만듬
//이를 저장해서 활용함

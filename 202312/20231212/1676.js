const input = require("fs")
  .readFileSync("202312/20231212/1676.txt")
  .toString()
  .trim()
  .split("\n")[0];

let num = Number(input);
let cnt = 0;
while(num>0){
    if(num%5===0) cnt++
    num--;
}

console.log(num)
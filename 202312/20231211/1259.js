const input = require("fs")
  .readFileSync("202312/20231211/1259.txt")
  .toString()
  .trim()
  .split("\n");


let arr = input.slice(0, input.length - 1);
for(let i=0; i<arr.length; i++){
    let cur = arr[i];
    let rev = cur.split("").reverse().join("");
    if(cur===rev) console.log("yes")
    else console.log("no")
}



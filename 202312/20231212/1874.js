const input = require("fs")
  .readFileSync("202312/20231212/1874.txt")
  .toString()
  .trim()
  .split("\n").map(Number);

let num = input[0];
let arr = input.slice(1);

let stack = [], operation = [];
let current = 1; 

for(let i = 0; i<num; i++){
    let cur = arr[i]
    while(current<=cur){
        stack.push(current);
        current++;
        operation.push("+")
    }

    if(stack[stack.length-1]===cur){
        stack.pop();
        operation.push("-");

    }else{
        console.log("no")
        return
    }
}

console.log(operation.join("\n"))
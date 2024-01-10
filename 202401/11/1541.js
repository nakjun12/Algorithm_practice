const input = require("fs")
  .readFileSync("202401/11/1541.txt")
  .toString()
  .trim().split("-");

  let result = 0;

  for(let i = 0; i<input.length; i++){

    let value = input[i].split("+").reduce((acc,cur)=>acc+parseInt(cur),0)
    if(i===0) result += value;
    else result -= value;
  }

console.log(result)
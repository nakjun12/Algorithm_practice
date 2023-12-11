const input = require("fs")
  .readFileSync("202312/20231211/1436.txt")
  .toString()
  .trim()
  .split("\n").map(Number)[0];

let num = 0;
let cnt = 0;
  while(true){
    if(String(num).includes("666")){
        cnt++;
        if(cnt>=input){
            console.log(num)
            break;
        }
    }

    num++;
  }




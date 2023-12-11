const input = require("fs")
  .readFileSync("202312/20231211/1654.txt")
  .toString()
  .trim()
  .split("\n")

let[n,goal] = input[0].split(" ").map(Number);
let arr = input.slice(1).map(Number)


let low = 1;
let high = Math.max(...arr);
let answer = 0;

while(low<=high){
    let mid = Math.floor((low+high)/2);
    let cnt = arr.reduce((acc,val)=>acc+Math.floor(val/mid),0);

    if(cnt>=goal){
        answer=mid;
        low = mid+1;
    }else{
        high = mid-1;
    }
}

console.log(answer)
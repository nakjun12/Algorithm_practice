const input = require("fs")
  .readFileSync("202401/11/1463.txt")
  .toString()
  .trim()
  
let num = Number(input)
let dp = new Array(num+1).fill(0);

for(let i=2; i<=num; i++){
    dp[i] = dp[i-1] +1;
    if(i%2===0) dp[i] = Math.min(dp[i],dp[i/2]+1);
    if(i%3===0) dp[i] = Math.min(dp[i],dp[i/3]+1);
}

console.log(dp[num])
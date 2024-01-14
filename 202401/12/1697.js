const input = require("fs")
  .readFileSync("202401/12/1697.txt")
  .toString()
  .trim()
  .split(" ");

const [n,m] = input.map(Number);

const queue = [n];
const visited = new Array(100001).fill(false);
const distance = new Array(100001).fill(0);
visited[n] = true;

while(queue.length>0){
 let cur = queue.shift();
 if(cur===m) break;

 for(let x of [cur+1,cur-1,cur*2]){
    if (x >= 0 && x <= 100000 && !visited[x]) {
      visited[x] = true;
      distance[x] = distance[cur] + 1;
      queue.push(x);
    }
 }
}
console.log(distance[m])
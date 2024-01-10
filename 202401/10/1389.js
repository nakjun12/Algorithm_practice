const input = require("fs")
  .readFileSync("202401/10/1389.txt")
  .toString()
  .trim()
  .split("\n")


const [num, _] = input[0].split(" ").map(Number)
const friendships = input.slice(1).map(e=>e.split(" ").map(Number))
const graph = createGraph(num,friendships) 
const baconNumbers = Array.from({length:num},(_,i) => createBaconNum(i+1,graph,num))
const answer = baconNumbers.indexOf(Math.min(...baconNumbers))+1

console.log(answer)

function createGraph(num,friendships){
    const graph = Array.from({length: num+1},()=>[]);
    
    friendships.forEach(([a,b])=>{
        graph[a].push(b);
        graph[b].push(a);
    })

    return graph
}

function createBaconNum(start,graph,num){
    const queue = [start];
    const visited = new Array(num+1).fill(false);
    const distance = new Array(num+1).fill(0);

    visited[queue] = true;
    while(queue.length>0){
        let cur = queue.shift();
        
        graph[cur].forEach(e=>{
            if(!visited[e]){
                visited[e] = true;
                queue.push(e);
                distance[e] = distance[cur]+1;
            }
        })
    }

    return distance.reduce((acc,cur)=> acc+cur,0)
}


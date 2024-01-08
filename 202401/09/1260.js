const input = require("fs")
  .readFileSync("202401/09/1260.txt")
  .toString()
  .trim()
  .split("\n")


 
const [N,M,V]= input[0].split(" ").map(Number)

const edges = input.slice(1).map(e=>e.split(" ").map(Number))

let graph = createGraph(N,edges);
let visited = new Array(N+1).fill(false);
let dfs_result = [];

DFS(V,graph,visited,dfs_result);
visited.fill(false);
let bfs_result = BFS(V,graph,visited);

console.log(dfs_result.join(" "))
console.log(bfs_result.join(" "))

function BFS(V,graph,visited){
    let queue = [V];
    let bfs_result = []
    visited[V] = true;

    while(queue.length>0){
        let v = queue.shift()
        bfs_result.push(v);

        graph[v].forEach(e=>{
            if(!visited[e]){
                queue.push(e)
                visited[e]= true;
            }
        })
    }
    return bfs_result
}

function DFS(V,graph,visited,dfs_result){
    visited[V] = true;
    dfs_result.push(V);

    graph[V].forEach((e)=>{
        if(!visited[e]){
            DFS(e,graph,visited,dfs_result)
        }
    })

}


function createGraph(N,edges){
    let graph = Array.from({length:N+1},()=>[]);

    edges.forEach(([a,b])=>{
        graph[a].push(b);
        graph[b].push(a);
    })

    graph.forEach(e=>e.sort((a,b)=>a-b))

    return graph
}


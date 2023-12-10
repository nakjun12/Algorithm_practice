const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = {}
r1.on("line", (line)=>{
    
    line.toUpperCase().split("").forEach((e)=>{
        input[e]? input[e]+= 1: input[e]=1;
    })
    r1.close();
}).on("close",()=>{
    let max = 0;
    let cnt = 0;
    let result= "";

    for(let el in input){
        let cur = input[el];
        if(cur>max){
            max = input[el];
            result= el;
            cnt =0;
        }else if(cur===max) cnt++;    
     }

     if(cnt>0) console.log("?")
     else console.log(result)
    
    process.exit();
})
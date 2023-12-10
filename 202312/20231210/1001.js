const readline = require("readline");

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.on("line", (line)=>{

    const [a,b] = line.split(" ").map((num)=>parseInt(num));
    console.log(a-b);

    r1.close();
}).on("close", ()=>{
    process.exit();
})
const input = require("fs")
  .readFileSync("202312/20231210/1181.txt")
  .toString()
  .trim()
  .split("\n");

let uniqueWords = [...new Set(input.slice(1))];

uniqueWords.sort((a,b)=>{
    if(a.length!==b.length)return a.length- b.length;
    return a.localeCompare(b); 
})
console.log(uniqueWords.join("\n"))


const input = require("fs")
  .readFileSync("202401/12/1764.txt")
  .toString()
  .trim()
  .split("\n");

const [N,M]  = input[0].split(" ").map(Number)
const listenPeople = input.slice(1,N+1)
const lookPeople = new Set(input.slice(N+1))


const answer = [...listenPeople.filter((e) => lookPeople.has(e))].sort();



console.log([answer.length,...answer].join("\n"))
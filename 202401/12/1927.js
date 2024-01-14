const input = require("fs")
  .readFileSync("202401/12/1927.txt")
  .toString()
  .trim()
  .split("\n").map(Number);

  const n = input[0];
  const arr = input.slice(1)
  const save = [];
  let answer = "";


  for(let num of arr){
    if(num===0){
      if (save.length) {
        save.sort((a, b) => a - b); // 배열 정렬
        answer += `${save.shift()}\n`; // 가장 작은 값 제거 및 추가
      } else {
        answer += "0\n";
      }
    }else{
        save.push(num)
     
    }
  }

  console.log(answer)

  //0 을 내면 작은 값을 출력
  // 작은 값이 없다면 0
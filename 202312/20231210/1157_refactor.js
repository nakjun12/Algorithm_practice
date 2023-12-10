const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let count = new Array(26).fill(0);
let max = 0, answer =[];
r1.on("line", (line) => {
  line
    .toUpperCase()
    .split("") // 문자열을 문자의 배열로 변환
    .forEach((e) => {
      let index = e.charCodeAt() - 65;
      if (index >= 0 && index < 26) {
        // 알파벳인 경우에만 카운트
        count[index]++;
      }
    });

    
     r1.close();
}).on("close", () => {
    max = Math.max(...count)

  for(let i =0; i<count.length; i++){
    if(count[i]===max) answer.push(String.fromCharCode(i+65));
  }

  console.log(answer.length>1? "?": answer[0])
  r1.close(); // 모든 처리가 끝난 후에 인터페이스를 닫음
  process.exit();
});

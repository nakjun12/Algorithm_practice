const input = require("fs")
  .readFileSync("202312/20231226/4949.txt")
  .toString()
  .trim()
  .split("\n");

for (let word of input) {
  if (word === ".") return;
  console.log(stringCheck(word));
}

function stringCheck(word) {
  const n = word.length;
  if (word[n - 1] !== "." || n > 100) return "no";
  let lastBracket = [];
  for (let i = 0; i < n - 1; i++) {
    if (word[i] === "[" || word[i] === "(") {
      lastBracket.push(word[i] === "[" ? "]" : ")");
    } else if (word[i] === "]" || word[i] === ")") {
      if (lastBracket.length === 0 || lastBracket.pop() !== word[i])
        return "no";
    }
  }
  return lastBracket.length === 0 ? "yes" : "no";
}

//닫는 것이 처음 들어오는 것을 고려하지 않았음
//여는 것이 남을 경우를 고려하지않았음
//여는 것을 넣어주는 것이 아니라 닫는 것을 넣어줘야함

//괄호는 짝을 이뤙함
//1:! 매칭
//안쪽 괄호가 끝나기전에 다른괄호 ㄴㄴ
// 왼쪽이 나오면 안쪽 추가가 가능하지만
// 오른쪽이 나오면 안쪽껏부터 끝나야함

//문자열도 균형?

//온점으로 끝나고 100글자보다 작거나 같다

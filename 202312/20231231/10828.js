const input = require("fs")
  .readFileSync("202312/20231231/10828.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const commands = input.slice(1);

let stack = [];
let output = ""; // 결과를 저장할 문자열

commands.forEach((command) => {
  processCommand(command);
});

console.log(output.trim()); // 모든 처리가 완료된 후 결과 출력

function processCommand(command) {
  const [cmd, value] = command.split(" ");

  switch (cmd) {
    case "push":
      stack.push(Number(value));
      break;
    case "pop":
      output += (stack.length > 0 ? stack.pop() : -1) + "\n";
      break;
    case "size":
      output += stack.length + "\n";
      break;
    case "empty":
      output += (stack.length === 0 ? 1 : 0) + "\n";
      break;
    case "top":
      output += (stack.length > 0 ? stack[stack.length - 1] : -1) + "\n";
      break;
  }
}

//스위치 쓰는게 중요했음
//foreach 배열 반환이 없다면 사용하자
// 저장하고, if문쓰고 콘솔로그 하는것보다
// 한개에 값 미리 저장하고 한번에 내보내는게 효율적이다.

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

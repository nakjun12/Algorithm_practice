const input = require("fs")
  .readFileSync("202312/20231231/10866.txt")
  .toString()
  .trim()
  .split("\n");

// console.log(input);
const commands = input.slice(1);

let deck = [];
let output = "";

commands.forEach((command) => {
  processCommand(command);
});

console.log(output.trim());

function processCommand(command) {
  let [cmd, value] = command.split(" ");

  switch (cmd) {
    case "push_front":
      deck.unshift(Number(value));
      break;
    case "push_back":
      deck.push(Number(value));
      break;
    case "pop_front":
      output += (deck.length > 0 ? deck.shift() : -1) + "\n";
      break;
    case "pop_back":
      output += (deck.length > 0 ? deck.pop() : -1) + "\n";
      break;
    case "size":
      output += deck.length + "\n";
      break;
    case "empty":
      output += (deck.length === 0 ? 1 : 0) + "\n";
      break;
    case "front":
      output += (deck.length > 0 ? deck[0] : -1) + "\n";
      break;
    case "back":
      output += (deck.length > 0 ? deck[deck.length - 1] : -1) + "\n";
      break;
  }
}

// push_front X: 정수 X를 덱의 앞에 넣는다.
// push_back X: 정수 X를 덱의 뒤에 넣는다.
// pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 덱에 들어있는 정수의 개수를 출력한다.
// empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

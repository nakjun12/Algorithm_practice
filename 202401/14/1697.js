const input = require("fs")
  .readFileSync("202401/14/1697.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, k] = input;
const queue = [n];
const timeConsumed = new Array(100001).fill(0);

while (queue.length > 0) {
  let cur = queue.shift();

  if (cur === k) {
    console.log(timeConsumed[cur]);
    break;
  }

  for (let position of [cur + 1, cur - 1, cur * 2]) {
    if (0 <= position && position <= 100000 && timeConsumed[position] === 0) {
      let curTime = timeConsumed[cur] + 1;
      timeConsumed[position] = curTime;
      queue.push(position);
    }
  }
}

//(0 ≤ N ≤ 100,000)
//1초 후에 X-1 또는 X+1로 이동하게 된다. 순간이동을 하는 경우에는 1초 후에 2*X의

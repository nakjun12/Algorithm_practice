const fs = require("fs");

const input = fs
  .readFileSync("202401/07/1107.txt")
  .toString()
  .trim()
  .split("\n");

const target = Number(input[0]);
const broken = input.length > 2 ? input[2].split(" ").map(Number) : [];
const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
  (e) => !broken.includes(e)
);

let minPresses = Math.abs(target - 100); // +와 - 버튼만 사용하는 경우

// 모든 채널을 확인하여 최소 누름 횟수 찾기
for (let channel = 0; channel <= 100_0000; channel++) {
  const channelStr = channel.toString();
  if (channelStr.split("").every((char) => buttons.includes(parseInt(char)))) {
    // 해당 채널로 이동하기 위해 필요한 전체 버튼 누름 횟수 계산
    const presses = channelStr.length + Math.abs(channel - target);
    minPresses = Math.min(minPresses, presses);
  }
}

console.log(minPresses);

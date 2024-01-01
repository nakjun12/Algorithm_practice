const input = require("fs")
  .readFileSync("202401/01/18111.txt")
  .toString()
  .trim()
  .split("\n");

const [y, x, b] = input[0].split(" ").map(Number);
const land = input.slice(1).map((e) => e.split(" ").map(Number));

let minTime = Number.MAX_SAFE_INTEGER;
let maxHeight = 0;

for (let height = 0; height <= 256; height++) {
  let time = 0;
  let inventory = b;

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      let diff = land[i][j] - height;
      if (diff >= 0) {
        time += diff * 2;
        inventory += diff;
      } else {
        let abs = Math.abs(diff);
        time += abs;
        inventory -= abs;
      }
    }
  }
  if (inventory >= 0 && time <= minTime) {
    minTime = time;
    maxHeight = height;
  }
}

console.log(minTime, maxHeight);
// 식을 정리함
// 1부터 ~256까지 체크한다
// 현재 높이와 차이를 구해서 그 차이 만큼 인벤토리와 시간에 넣어줌
// 인벤토리에 블럭이 부족한지 체크하고, 시간이 더 작다면
// 높이를 넣어준다.
// 가장 작은 시간이 목적이다. 하지만 시간이 같을때는 가장 높아야한다.
// 이를 비교하지 않아도 가장 높은 높이가 들어갈 수 있게 낮은것부터 시작하자 그러면 알아서 높은게 마지막에 들어온다

// 좌표 (i, j)의 가장 위에 있는 블록을 제거하여 인벤토리에 넣는다.
// 인벤토리에서 블록 하나를 꺼내어 좌표 (i, j)의 가장 위에 있는 블록 위에 놓는다.
// 1번 작업은 2초가 걸리며, 2번 작업은 1초가 걸린다.
// 밤에는 무서운 몬스터들이 나오기 때문에 최대한 빨리 땅 고르기 작업을 마쳐야 한다.
// ‘땅 고르기’ 작업에 걸리는 최소 시간과 그 경우 땅의 높이를 출력하시오.

// 단, 집터 아래에 동굴 등 빈 공간은 존재하지 않으며, 집터 바깥에서 블록을 가져올 수 없다.
// 또한, 작업을 시작할 때 인벤토리에는 B개의 블록이 들어 있다. 땅의 높이는 256블록을 초과할 수 없으며, 음수가 될 수 없다.

function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      if (board[i][k] === 1) {
        answer += 1;
        board[i][k] = 0;

        queue.push([i, k]);
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let j = 0; j < 8; j++) {
            let nx = dx[j] + x;
            let ny = dy[j] + y;
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0]
];

console.log(solution(arr));

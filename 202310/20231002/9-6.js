function solution(s, e) {
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx > 0 && nx < 10001 && ch[nx] === 0) {
        if (nx === e) return dis[x] + 1;
        ch[nx] = 1;
        dis[nx] = dis[x] + 1;
        queue.push(nx);
      }
    }
  }
  return "";
}

console.log(solution(8, 3));

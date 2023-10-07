function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let V = queue.shift();
    answer += V + " ";
    for (let nv of [V * 2, V * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());

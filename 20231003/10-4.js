function solution(m, coin) {
  let answer = 0;
  let DY = Array.from({ length: m + 1 }, () => 999);
  DY[0] = 0;
  let num = coin.length;
  for (let i = 0; i < num; i++) {
    for (let k = coin[i]; k <= m; k++) {
      DY[k] = Math.min(DY[k], DY[k - coin[i]] + 1);
    }
    console.log(DY);
  }

  return DY[m];
}

let arr = [1, 2, 5];
console.log(solution(15, arr));

// 여러번 사용할 수 있기 때문에 상승 곡선으로 간다
// 왜냐하면 이 동전을 2회 이상 사용할 경우를 고려해야하기 때문이다.

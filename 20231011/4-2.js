function isPrime(num) {
  //기억할 것
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let i of arr) {
    let res = 0;
    while (i) {
      let first = i % 10;
      res = res * 10 + first; // 곱셈을 통해 0을 걸러지게함
      i = parseInt(i / 10);
    }

    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

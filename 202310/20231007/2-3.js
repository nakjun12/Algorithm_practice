function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer.push("D");
    } else if (a[i] === 1 && b[i] === 3) answer.push("A");
    else if (a[i] === 2 && b[i] === 1) answer.push("A");
    else if (a[i] === 3 && b[i] === 2) answer.push("A");
    else {
      answer.push("B");
    }
  }

  return answer.join("\n");
}

// 1===1
// 1   3 승 작
// 1   2 패 작
// 22 무
// 2 3 패 작
// 2 1 승 큰
// 33 무
// 3 1 패 큰
// 3 2 승 큰

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

//인상적인 부분은 2가지 결과를 체크하여서 1가지 결과를 나머지로 처리하였다.

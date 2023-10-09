// function solution(s, t) {
//   let p = 100;
//   let answer = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === t) {
//       p = 0;
//       answer.push(p);
//     } else {
//       p++;
//       answer.push(p);
//     }
//   }

//   p = 100; // 재탐색을 위한 초기화

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === t) {
//       p = 0;
//     } else {
//       p++;
//       answer[i] = Math.min(answer[i], p);
//     }
//   }

//   return answer.join(" ");
// }
//p를 1000으로 선언
//t의 위치를 찾는다. p=0으로 배열에 입력
// 아닐경우에는 p+=1 씩해줌 배열에 입력
// 반대로도 추적하여서 더 작은 값을 배열에 입력한다.

let str = "teachermode";
console.log(solution(str, "e"));

function updateDistance(s, t, answer) {
  let p = 1000;

  const direction = answer.length === 0 ? 1 : -1;
  const start = direction === 1 ? 0 : s.length - 1;
  const end = direction === 1 ? s.length : -1;

  for (let i = start; i !== end; i += direction) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
    }
    if (direction === 1) {
      answer.push(p);
    } else {
      answer[i] = Math.min(answer[i], p);
    }
  }
}

function solution(s, t) {
  let answer = [];

  updateDistance(s, t, answer); // 왼쪽에서 오른쪽으로
  updateDistance(s, t, answer); // 오른쪽에서 왼쪽으로

  return answer.join(" ");
}

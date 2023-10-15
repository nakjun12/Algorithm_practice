function solution(arr) {
  //틀림
  let t = arr.length;
  let s = arr[0].length;
  let answer = 0;

  for (let i = 1; i <= s; i++) {
    for (let k = 1; k <= s; k++) {
      //2차 배열로 모든 순환
      let cnt = 0;
      for (let j = 0; j < t; j++) {
        let mentor = (mentee = 0); //초기화 및 할당
        for (let u = 0; u < s; u++) {
          if (arr[j][u] === i) mentor = u; // 인덱스값 넣어줌
          if (arr[j][u] === k) mentee = u;
        }

        if (mentor < mentee) {
          cnt++;
        }
      }
      if (cnt === t) answer++;
    }
  }
  return answer;
}

// function solution(arr) {
//   let t = arr.length;
//   let s = arr[0].length;
//   let answer = 0;

//   for (let i = 1; i <= s; i++) {
//     for (let k = 1; k <= s; k++) {
//       if (i === k) continue; // 같은 숫자에 대해서는 검사할 필요가 없습니다.

//       let cnt = 0;
//       for (let j = 0; j < t; j++) {
//         let mentorPos = arr[j].indexOf(i);
//         let menteePos = arr[j].indexOf(k);

//         if (mentorPos < menteePos) {
//           cnt++;
//         }
//       }
//       if (cnt === t) answer++;
//     }
//   }
//   return answer;
// }
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2]
];
console.log(solution(arr));

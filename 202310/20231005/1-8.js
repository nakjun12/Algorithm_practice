// function solution(arr) {
//   let answer = 0;

//   let tot = arr.reduce((a, b) => a + b, 0);
//   //   for (let i = 0; i < arr.length; i++) {
//   //     tot += arr[i];
//   //   }

//   console.log(tot);
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = i + 1; k < arr.length; k++) {
//       let res = tot - (arr[i] + arr[k]);
//       if (res === 100) {
//         arr.splice(i, 1);
//         arr.splice(k, 1);
//         console.log(arr);
//         break;
//       }
//     }
//   }
//   return arr.join(", ");
// }

function solution(arr) {
  // 전체 합을 구합니다.
  let tot = arr.reduce((a, b) => a + b, 0);
  let targetSum = tot - 100;

  // Set 자료구조를 사용하여 배열의 값을 저장합니다.
  let numSet = new Set(arr);
  console.log(numSet);
  for (let i = 0; i < arr.length; i++) {
    let neededVal = targetSum - arr[i];
    if (numSet.has(neededVal)) {
      // 두 개의 값을 Set과 원본 배열에서 제거합니다.
      numSet.delete(arr[i]);
      numSet.delete(neededVal);
      arr.splice(arr.indexOf(arr[i]), 1);
      arr.splice(arr.indexOf(neededVal), 1);
      break;
    }
  }
  return arr.join(", ");
}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// function solution(num, arr) {
//   let cnt = [];
//   let stringArr = arr.map(String);

//   for (let i of stringArr) {
//     let sum = 0;
//     for (let k of i) {
//       sum += Number(k);
//     }
//     cnt.push(sum);
//   }
//   let max = 0;
//   let maxIndex = 0;

//   for (let i of cnt) {
//     if (max < i) max = i;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (cnt[i] === max && maxIndex < arr[i]) maxIndex = arr[i];
//   }
//   return maxIndex;
// }

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521];
console.log(solution(7, arr));

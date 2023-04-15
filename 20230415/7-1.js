let num = 6;
let numArray = [13, 5, 11, 7, 23, 15];

let answer = 0;
for (let i = 0; i < numArray.length - 1; i++) {
  // 신경쓸것
  let idx = i;
  for (let j = i + 1; j < numArray.length; j++) {
    if (numArray[idx] > numArray[j]) {
      idx = j;
    }
  }

  [numArray[i], numArray[idx]] = [numArray[idx], numArray[i]]; //기억할 것
}

console.log(numArray);

//선택 정렬
// [Solved✌🏻]낙준_선택정렬

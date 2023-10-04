function solution(arr) {
  let oddArr = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) oddArr.push(arr[i]);
  }

  for (let i = 0; i < oddArr.length; i++) {
    sum += oddArr[i];
    min = min > oddArr[i] ? oddArr[i] : min;
  }

  console.log(sum, min);
}

let arr = [12, 77, 38, 41, 53, 92, 85];
solution(arr);

function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
  }
  return min;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

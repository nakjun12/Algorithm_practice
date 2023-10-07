function solution(a, b, c) {
  let sum = a + b + c;
  let max = Math.max(a, b, c);
  return sum - max > max ? "Yes" : "No";
}

console.log(solution(13, 33, 17));

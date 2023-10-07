function solution(word) {
  let char = word.split("");
  for (let i = 0; i < char.length; i++) {
    if (char[i].toUpperCase() !== char[i]) char[i] = char[i].toUpperCase();
  }
  return char.join("");
}

console.log(solution("ItisTimeToStudy"));
//iterable로 돌리면, 배열을 직접 수정하기 어려움

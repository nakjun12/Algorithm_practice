function solution(word) {
  let char = word.split("");
  for (let i = 0; i < char.length; i++) {
    char[i] =
      char[i] === char[i].toUpperCase()
        ? char[i].toLowerCase()
        : char[i].toUpperCase();
  }
  return char.join("");
}

console.log(solution("StuuuDY"));

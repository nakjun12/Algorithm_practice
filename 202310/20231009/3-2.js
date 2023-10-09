function solution(word) {
  let replaceWord = word.toLowerCase().replace(/[^a-z]/g, "");
  if (replaceWord !== replaceWord.split("").reverse().join("")) return "NO";
  return "YES";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

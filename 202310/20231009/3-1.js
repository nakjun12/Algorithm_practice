//회문 문자열
function solution(word) {
  //   let wordArr = word.split("");

  //   for (let i = 0; i < wordArr.length; i++) {
  //     if (
  //       wordArr[i].toLowerCase() !== wordArr[wordArr.length - i - 1].toLowerCase()
  //     )
  //       return "NO";
  //   }
  let lowerWord = word.toLowerCase(); //string 가능
  let num = word.length;

  for (let i = 0; i < Math.floor(num); i++) {
    if (lowerWord[i] !== lowerWord[num - 1 - i]) return "NO";
  }
  console.log(lowerWord);

  return "YES";
}

let word = "GoSDog";
console.log(solution(word));

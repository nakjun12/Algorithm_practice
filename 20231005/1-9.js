function solution(word) {
  let alphabet = word.split("");
  console.log(alphabet);
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === "A") alphabet[i] = "#";
  }

  return alphabet.join("");
}

console.log(solution("BANANA"));

function solve1316() {
  const input = require("fs")
    .readFileSync("202508/15/1316.txt")
    .toString()
    .trim()
    .split("\n");

  const words = input.slice(1);

  function isGroupWord(word: string) {
    const visitedCharacters = new Set();
    let previousCharacter = "";

    for (let character of word) {
      if (previousCharacter !== character) {
        const isAlreadyVisited = visitedCharacters.has(character);
        if (isAlreadyVisited) return false;
        visitedCharacters.add(character);
        previousCharacter = character;
      }
    }
    return true;
  }

  const groupWordCount = words.filter(isGroupWord).length;
  console.log(groupWordCount);
}

solve1316(); // 함수 호출

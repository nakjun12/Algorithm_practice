const input = require("fs")
  .readFileSync("202508/15/1316.txt")
  .toString()
  .trim()
  .split("\n"); //  .split(/\s+/)

const [wordLength, ...words] = input;

function isGroupWord(word: string) {
  const visitedCharacters = new Set();
  let prevCharacter = "";

  for (let character of word) {
    if (prevCharacter !== character) {
      const isVisited = visitedCharacters.has(character);
      if (isVisited) return false;
      visitedCharacters.add(character);
      prevCharacter = character;
    }
  }

  return true;
}

const resultLength = words.filter(isGroupWord).length;

console.log(resultLength);

function solve1966() {
  function solve1966Optimized() {
    const filePath =
      process.platform === "linux" ? "/dev/stdin" : __dirname + "/1966.txt";
    const input: string[] = require("fs")
      .readFileSync(filePath)
      .toString()
      .trim()
      .split("\n");

    const [caseCountStr, ...problemLines] = input;
    const caseCount = Number(caseCountStr);

    for (let caseIndex = 0; caseIndex < caseCount; caseIndex++) {
      const infoLine = problemLines[caseIndex * 2];
      const prioritiesLine = problemLines[caseIndex * 2 + 1];

      if (!infoLine || !prioritiesLine) continue;

      const [, targetIndex] = infoLine.split(" ").map(Number);
      const priorities = prioritiesLine.split(" ").map(Number);

      const queue = priorities.map((priority, index) => ({
        priority,
        initialIndex: index
      }));

      const sortedPriorities = priorities.sort((a, b) => b - a);

      let printOrder = 0;

      while (queue.length > 0) {
        const currentDocument = queue.shift();
        if (!currentDocument) continue;

        if (currentDocument.priority === sortedPriorities[0]) {
          printOrder++;
          sortedPriorities.shift();

          if (currentDocument.initialIndex === targetIndex) {
            console.log(printOrder);
            break;
          }
        } else {
          queue.push(currentDocument);
        }
      }
    }
  }

  solve1966Optimized();
}

solve1966();

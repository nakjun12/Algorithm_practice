const [N, S, ...arr] = require("fs")
  .readFileSync("20230404/example3.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
//5 , 0
const solve = (N, S, arr) => {
  let output = 0;
  const recursion = (i, sum) => {
    if (i === N) return;

    sum += arr[i];
    if (sum === S) output++;

    recursion(i + 1, sum);
    recursion(i + 1, sum - arr[i]);
  };

  recursion(0, 0);
  console.log(output);
};

solve(N, S, arr);

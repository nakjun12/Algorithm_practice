const input = require("fs")
  .readFileSync("202401/04/1074.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, r, c] = input;

function findVisitOrder(n, r, c) {
  if (n === 0) {
    return 0;
  }
  const half = 1 << (n - 1);
  const value = half * half;
  if (r < half && c < half) return findVisitOrder(n - 1, r, c);
  if (r < half && c >= half) return value + findVisitOrder(n - 1, r, c - half);
  if (r >= half && c < half)
    return 2 * value + findVisitOrder(n - 1, r - half, c);
  if (r >= half && c >= half)
    return 3 * value + findVisitOrder(n - 1, r - half, c - half);
}
console.log(findVisitOrder(n, r, c));

//

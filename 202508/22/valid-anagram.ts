/**
 * link: https://leetcode.com/problems/valid-anagram/
 * time complexity: O(n)
 * space complexity: O(n)
 * Runtime: 11ms (Beats 73.47%)
 * Memory: 60.15MB (Beats 33.88%)
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const hash: Record<string, number> = {};

  for (let character of s) {
    hash[character] = (hash[character] || 0) + 1;
  }

  for (let character of t) {
    if (!hash[character]) return false;
    hash[character]--;
  }

  return Object.values(hash).every((count) => count === 0);
}

/**
 * time complexity: O(n)
 * space complexity: O(n)
 * Runtime: 6ms (Beats 91.15%)
 * Memory: 55.31MB (Beats 99.18%)
 * 내장 메서드, CPU 파이프라인 효율성, 메모리 접근 패턴, Hidden Classes 최적화로 인해 더 빠름
 */
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const groupS = groupBy(s);
  const groupT = groupBy(t);

  return Object.keys(groupS).every((k) => groupS[k] === groupT[k]);
}

const groupBy = (v: string) =>
  v
    .split("")
    .reduce(
      (acc: Record<string, number>, cur) => (
        (acc[cur] = (acc[cur] ?? 0) + 1), acc
      ),
      {}
    );

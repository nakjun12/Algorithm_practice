/**
 * link: https://leetcode.com/problems/climbing-stairs/
 * time complexity: O(n)
 * space complexity: O(n)
 */
function climbingStairs(n: number) {
  const dp: Record<number, number> = { 1: 1, 2: 2 };
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] ?? 0) + (dp[i - 2] ?? 0);
  }
  return dp[n];
}

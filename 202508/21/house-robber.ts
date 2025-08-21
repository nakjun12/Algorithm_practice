/**
 * link: https://leetcode.com/problems/house-robber/submissions/1742651461/
 * time complexity: O(n)
 * space complexity: O(n)
 */
function rob(nums: number[]): number {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0] ?? 0, nums[1] ?? 0);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}

/**
 * link: https://leetcode.com/problems/house-robber/submissions/1742651461/
 * time complexity: O(n)
 * space complexity: O(1)
 */
function rob2(nums: number[]): number {
  let prev = 0;
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    const temp = curr;
    curr = Math.max(prev + (nums[i] ?? 0), curr);
    prev = temp;
  }
  return curr;
}

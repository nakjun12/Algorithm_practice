/**
 * link: https://leetcode.com/problems/longest-consecutive-sequence/
 * time complexity: O(n)
 * space complexity: O(n)
 */
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  const uniqueNumsSet = new Set(nums);
  let maxLength = 1;

  for (const currentNum of uniqueNumsSet) {
    const prevNum = currentNum - 1;
    // 핵심
    const isFirstInSequence = !uniqueNumsSet.has(prevNum);
    if (isFirstInSequence) {
      let currentLength = 1;
      let checkingNum = currentNum + 1;
      while (uniqueNumsSet.has(checkingNum)) {
        currentLength++;
        checkingNum++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}

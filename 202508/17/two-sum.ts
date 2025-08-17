/**
 * link: https://leetcode.com/problems/two-sum/
 * time complexity: O(n)
 * space complexity: O(n)
 */
function twoSum(nums: number[], target: number): number[] {
  const numberIndexMap: Record<number, number> = {};

  for (const [index, currentNumber] of nums.entries()) {
    const requiredNumber = target - currentNumber;
    const foundIndex = numberIndexMap[requiredNumber];

    if (foundIndex !== undefined) {
      return [foundIndex, index];
    }

    numberIndexMap[currentNumber] = index;
  }

  return [];
}

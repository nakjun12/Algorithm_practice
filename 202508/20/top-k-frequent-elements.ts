/**
 * link: https://leetcode.com/problems/top-k-frequent-elements/submissions/1742145557/
 * TC: O(nlogn)
 * SC: O(n)
 */

function topKFrequent(nums: number[], k: number): number[] {
  const frequency: Record<number, number> = {};

  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  return Object.entries(frequency) // [string, number][] 반환
    .sort((a, b) => b[1] - a[1]) // 빈도수로 직접 비교
    .slice(0, k) // 상위 k개
    .map(([num]) => parseInt(num)); // 숫자만 추출하여 변환
}

type Nums = [number, number][];

/*
 * TC: O(nlogn)
 * SC: O(n)
 * */
function topKFrequentWithFunction(nums: number[], k: number): number[] {
  const counting = (arr: number[]) =>
    arr.reduce(
      (acc, n) => acc.set(n, (acc.get(n) ?? 0) + 1),
      new Map<number, number>()
    );

  const toValues = (map: Map<number, number>) => Array.from(map.entries());

  const sorting = (arr: Nums) => arr.sort((a, b) => b[1] - a[1]);

  const getK = (arr: Nums, k: number) => arr.slice(0, k).map((v) => v[0]);

  return pipe(counting, toValues, sorting, (arr: Nums) => getK(arr, k))(nums);
}

const pipe =
  (...fns: Function[]) =>
  (x: any) =>
    fns.reduce((v, f) => f(v), x);

/**
 * 가장 자주 나타나는 상위 k개 원소를 반환하는 함수
 * 버킷 정렬을 사용하여 O(n) 시간 복잡도로 해결
 *
 * @param inputNumbers - 정수 배열 (빈 배열이면 빈 배열 반환)
 * @param targetCount - 반환할 원소의 개수 (양의 정수)
 * @returns 빈도수가 높은 순서대로 targetCount개 원소 배열
 * @throws {Error} targetCount가 0 이하이거나, inputNumbers.length보다 클 때
 */
function topKFrequentWithBucketSort(
  inputNumbers: readonly number[],
  targetCount: number
): number[] {
  const frequencyMap = new Map<number, number>();
  for (const currentNumber of inputNumbers) {
    const currentFrequency = frequencyMap.get(currentNumber) ?? 0;
    frequencyMap.set(currentNumber, currentFrequency + 1);
  }

  const bucketsByFrequency: number[][] = Array.from(
    { length: inputNumbers.length + 1 },
    () => []
  );

  for (const [numberValue, frequency] of frequencyMap.entries()) {
    const targetBucket = bucketsByFrequency[frequency];
    if (targetBucket !== undefined) {
      targetBucket.push(numberValue);
    }
  }

  const result: number[] = [];

  for (
    let frequencyIndex = bucketsByFrequency.length - 1;
    frequencyIndex >= 0 && result.length < targetCount;
    frequencyIndex--
  ) {
    const currentBucket = bucketsByFrequency[frequencyIndex];
    if (currentBucket === undefined) {
      continue;
    }

    for (const numberValue of currentBucket) {
      result.push(numberValue);

      if (result.length === targetCount) {
        return result;
      }
    }
  }

  return result;
}

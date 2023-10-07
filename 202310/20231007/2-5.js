function solution(arr) {
  //   let answer = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let x = arr[i];
  //     let up = 0;
  //     for (let k = 0; k < arr.length; k++) {
  //       if (x < arr[k]) up++;
  //     }
  //     answer.push(up + 1);
  //   }
  //   return answer;
  //   let answer = Array.from({ length: arr.length }, () => 1);
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let k = 0; k < arr.length; k++) {
  //       if (arr[i] < arr[k]) answer[i]++;
  //     }
  //   }
  //   return answer;
  // 배열의 각 원소와 해당 원소의 인덱스를 객체로 묶어 새로운 배열 생성
  const indexedArr = arr.map((value, index) => ({ value, index }));

  // 값을 기준으로 오름차순 정렬
  indexedArr.sort((a, b) => b.value - a.value);

  const ranks = Array(arr.length);
  let prevValue = null; // 이전 값을 저장하기 위한 변수
  let prevRank = 0; // 이전 순위를 저장하기 위한 변수

  indexedArr.forEach((item, idx) => {
    if (item.value === prevValue) {
      // 이전 값과 현재 값이 같으면 이전 순위를 사용
      ranks[item.index] = prevRank;
    } else {
      // 그렇지 않으면 현재 인덱스(0 기반)에 1을 더한 값을 순위로 사용
      ranks[item.index] = idx + 1;
      prevRank = idx + 1; // 순위 업데이트
    }
    prevValue = item.value; // 값 업데이트
  });

  return ranks;
}

let arr = [87, 89, 92, 100, 76, 89, 87];
console.log(solution(arr));

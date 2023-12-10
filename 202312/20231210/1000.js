// readline 모듈을 사용하기 위해 require를 통해 불러옵니다.
const readline = require("readline");

// readline 인터페이스를 생성합니다.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 'line' 이벤트가 발생하면 (사용자가 입력을 완료하면) 아래의 콜백 함수가 실행됩니다.
rl.on("line", function (line) {
  // 입력받은 문자열을 공백을 기준으로 나누어 숫자로 변환합니다.
  const [a, b] = line.split(" ").map((num) => parseInt(num));

  // 변환된 숫자의 합을 출력합니다.
  console.log(a + b);

  // readline 인터페이스를 종료합니다.
  rl.close();
}).on("close", function () {
  // 프로세스를 종료합니다.
  process.exit();
});

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

/**
 * 현재 날짜 기준으로 폴더 경로 생성 (YYYYMM/DD 형식)
 * @returns 날짜 기반 경로 문자열
 */
function createDateBasedPath(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return path.join(`${year}${month}`, day);
}

/**
 * TypeScript 파일 템플릿 생성
 * @param problemNumber - 문제 번호
 * @returns TypeScript 코드 템플릿 문자열
 */
function createTypeScriptTemplate(problemNumber: string): string {
  return `
  const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/${problemNumber}.txt";
  function solve${problemNumber}() {
  const input: string[] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\\n");
  
  
}

solve${problemNumber}();`;
}

/**
 * 디렉토리를 재귀적으로 생성
 * @param dirPath - 생성할 디렉토리 경로
 */
function createDirectoryRecursive(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * 백준 문제 파일들(.ts, .txt)을 생성하는 메인 함수
 * @param problemNumber - 생성할 문제 번호
 */
function createProblemFiles(problemNumber: string): void {
  // 1. 날짜 기반 폴더 경로 생성
  const datePath: string = createDateBasedPath();
  const fullPath: string = path.resolve(datePath);

  // 2. 디렉토리 생성
  createDirectoryRecursive(fullPath);

  // 3. 파일 경로 설정
  const tsFileName: string = `${problemNumber}.ts`;
  const txtFileName: string = `${problemNumber}.txt`;
  const tsFilePath: string = path.join(fullPath, tsFileName);
  const txtFilePath: string = path.join(fullPath, txtFileName);

  // 4. 파일 생성
  const tsContent: string = createTypeScriptTemplate(problemNumber);
  fs.writeFileSync(tsFilePath, tsContent, "utf8");
  fs.writeFileSync(txtFilePath, "", "utf8");

  // 5. 성공 메시지 출력
  console.log(`\n✅ 파일 생성 완료!`);
  console.log(`📂 경로: ${datePath}`);
  console.log(`   📄 ${tsFileName}`);
  console.log(`   📄 ${txtFileName}`);
}

/**
 * 사용자로부터 대화형 입력을 받는 함수
 */
function getUserInput(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("백준 문제 번호를 입력하세요: ", (problemNumber: string) => {
    if (!problemNumber.trim()) {
      console.log("❌ 문제 번호를 입력해주세요.");
      rl.close();
      return;
    }

    if (!/^\d+$/.test(problemNumber.trim())) {
      console.log(`❌ '${problemNumber}'는 유효한 숫자가 아닙니다.`);
      rl.close();
      return;
    }

    try {
      createProblemFiles(problemNumber.trim());
      console.log("\n✨ 준비 완료! 즐겁게 문제 풀이를 시작하세요! ✨");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "알 수 없는 오류";
      console.log(`❌ 파일 생성 중 오류 발생: ${errorMessage}`);
    }

    rl.close();
  });
}

/**
 * 명령행 인수를 처리하는 함수
 */
function handleCommandLineArgs(): void {
  const args = process.argv.slice(2);
  const problemNumber = args[0];

  if (problemNumber) {
    // 명령행에서 문제 번호가 제공된 경우
    if (!/^\d+$/.test(problemNumber)) {
      console.error(`❌ '${problemNumber}'는 유효한 숫자가 아닙니다.`);
      process.exit(1);
    }

    try {
      createProblemFiles(problemNumber);
      console.log("\n✨ 준비 완료! 즐겁게 문제 풀이를 시작하세요! ✨");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "알 수 없는 오류";
      console.error(`❌ 파일 생성 중 오류 발생: ${errorMessage}`);
      process.exit(1);
    }
  } else {
    // 명령행에서 문제 번호가 제공되지 않은 경우 대화형 입력
    getUserInput();
  }
}

/**
 * 스크립트의 메인 진입점
 */
function main(): void {
  console.log("🚀 백준 문제 파일 생성기");
  console.log(`📅 오늘 날짜: ${createDateBasedPath()}`);
  handleCommandLineArgs();
}

// 스크립트 실행
main();

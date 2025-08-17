import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

/**
 * kebab-case 문자열을 camelCase로 변환합니다.
 * 예: "contains-duplicate" -> "containsDuplicate"
 * @param str 변환할 kebab-case 문자열
 * @returns 변환된 camelCase 문자열
 */
function kebabToCamelCase(str: string): string {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
}

/**
 * 현재 날짜 기준으로 폴더 경로를 생성합니다. (YYYYMM/DD 형식)
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
 * LeetCode 문제 파일 템플릿을 생성합니다.
 * @param problemName - 문제 이름 (예: "contains-duplicate")
 * @returns TypeScript 코드 템플릿 문자열
 */
function createTypeScriptTemplate(problemName: string): string {
  const functionName = kebabToCamelCase(problemName);

  return `/**
 * link: 
 * time complexity: 
 * space complexity: 
 */
function ${functionName}() {

}
`;
}

/**
 * 디렉토리를 재귀적으로 생성합니다.
 * @param dirPath - 생성할 디렉토리 경로
 */
function createDirectoryRecursive(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * LeetCode 문제 파일을 생성하는 메인 함수
 * @param problemName - 생성할 문제 이름 (kebab-case)
 */
function createProblemFile(problemName: string): void {
  // 1. 날짜 기반 폴더 경로 생성
  const datePath: string = createDateBasedPath();
  const fullPath: string = path.resolve(datePath);

  // 2. 디렉토리 생성
  createDirectoryRecursive(fullPath);

  // 3. TypeScript 파일 경로 설정
  const tsFileName: string = `${problemName}.ts`;
  const tsFilePath: string = path.join(fullPath, tsFileName);

  // 4. 파일 생성
  if (fs.existsSync(tsFilePath)) {
    console.log(`❌ 파일이 이미 존재합니다: ${tsFilePath}`);
    return;
  }

  const tsContent: string = createTypeScriptTemplate(problemName);
  fs.writeFileSync(tsFilePath, tsContent, "utf8");

  // 5. 성공 메시지 출력
  console.log(`\n✅ 파일 생성 완료!`);
  console.log(`📂 경로: ${datePath}`);
  console.log(`   📄 ${tsFileName}`);
}

/**
 * 사용자로부터 대화형 입력을 받는 함수
 */
function getUserInput(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(
    "LeetCode 문제 이름을 입력하세요 (예: contains-duplicate): ",
    (problemName: string) => {
      const trimmedName = problemName.trim();
      if (!trimmedName) {
        console.log("❌ 문제 이름을 입력해주세요.");
        rl.close();
        return;
      }

      try {
        createProblemFile(trimmedName);
        console.log("\n✨ 준비 완료! 즐겁게 문제 풀이를 시작하세요! ✨");
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "알 수 없는 오류";
        console.log(`❌ 파일 생성 중 오류 발생: ${errorMessage}`);
      }

      rl.close();
    }
  );
}

/**
 * 스크립트의 메인 진입점
 */
function main(): void {
  const args = process.argv.slice(2);
  const problemName = args[0];

  console.log("🚀 LeetCode 문제 파일 생성기");

  if (problemName) {
    try {
      createProblemFile(problemName.trim());
      console.log("\n✨ 준비 완료! 즐겁게 문제 풀이를 시작하세요! ✨");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "알 수 없는 오류";
      console.error(`❌ 파일 생성 중 오류 발생: ${errorMessage}`);
      process.exit(1);
    }
  } else {
    getUserInput();
  }
}

// 스크립트 실행
main();

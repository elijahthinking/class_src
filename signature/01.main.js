console.log("master");


//js 선행 01 개요

/** 표기법
 * - 대쉬케이스 또는 케밥 케이스 = 대쉬기호를 통해서 연결된 단어를 하나의 단어로 컴퓨터가 인지 
 * _ 스네이크 케이스 하나의 단어를 구분해서 표기
 * camelCase 카멜케이스낙타등처럼 단어를 조합해서 하나의단어로
 * PascalCase 카멜케이스와 유사 앞자리도 대문자 new 라는 키워드를 가지고 있는 생성자함수라는 개념에 사용, 자바에서는 카멜사용
 * zero-based numbering = 자바스크립트는 0부터 세야한다
 */

let fruits = ['Apple', 'Banana', 'Cherry'];
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);
  //숫자 0부터 시작 따라서 0은 애플 1은 바나나 2는 체리

  console.log(new Date('2025-10-31').getDay()); //5 금요일
  console.log(new Date('2025-11-02').getDay()); //0 일요일
  console.log(new Date('2025-11-10').getDay()); //1 월요일

  //0일요일 부터 시작해서 1은 월요일 5는 금요일 6은 토요일 순~

//주석처리
  // 한줄메모
  /* 한줄메모 */
  /**  다중메모 */
  
  

//js 선행 02. 데이터의 종류(자료형)
/**



 * Number
 * Boolean
 * Undefined
 * Null
 * Object
 * Arry
 */
//  * String
let myName = "masters";
let email = 'ksw@gmail.com' ;
let hello = `hello ${myName}?!`
console.log(myName);
console.log(email);
console.log(hello);
/**
 * 
 */


let a = "hello";
let b = "javascript";
console.log( a+b)
//문자열 두개 합쳐져서 hellojavascript

a="10";
b="20";
console.log( a+b)
//문자열이 합쳐지면 이어서 1020
a="20";
b=30;
console.log( a+b);
//문자열 과 숫자열이 합쳐지면 문자열 20 30

// ""  ''   ``    // ""<<<<<햅팁이라고 호칭
let user= "홍길동";
// 안녕하세요 홍길동님       입력방법
console.log("안녕하세요." + user + "님");  //번거롭기 때문에 간단히 ``백틱으로 입력방법

console.log( `안녕하세요. ${user}님` ); 


let msg = `여
러
줄
을
써
볼
까
나`;
console.log(msg)
// console.log( a+b)     메시지를 줄바꿈해도 전체 처리

let i=5, j=3;   //쉼표로도 처리 가능
// i + j = 8 을 더하기 연산자를 이용해서출력
console.log("i + j =" +(i+j));   // 문자열 +숫자열
console.log(`i + j = ${i+j}`);


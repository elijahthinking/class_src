/* 삼항(조건) 연산자
항 ? 항1 : 항2
(조건식) ? true : false;
*/


// let age = 15;
// let result = (age>19) ? "성인입니다":"미성년자입니다";   
// console.log(result)

let age = 25;
let result = (age>19) ? "성인입니다":"미성년자입니다";   
console.log(result)

//짝수와 홀수 판별 짝수는 짝수 홀수는 홀수 출력



//2 ,3 숫자를 % 나머지값 구하는 연산자로 2로 나누어서 나머지값이 0과 같으면 === 타입같게
// ===타입같게 
/*1 .변수를 선언하고 임의의 수를 저장
2. 짝수와 홀수를 판별(삼항연산자로) >변수에 저장
3 참일 경우에는 짝수 출력 4. 거짓일 경우에는 홀수 출력 >변수에 저장
5.변수를 출력 console.log
 
*/

let num = 7;
let msg = (num%2===0) ? "짝수 입니다":"홀수 입니다";
console.log(msg)

let point = 50;
let sucess = (point>=60) ? "합격 입니다 ":"불합격 입니다";
console.log(sucess);

//점수가 60점 이상이면 합격 미만이면 불합격

let score = 50;
console.log( score>=60 ? "합격 입니다": "불합격 입니다");

//0보다 크면 양수 아니면 음수 출력은 변수에 저장하여 출력

let data = -1;
let result_data = (data>0) ? "양수" : "0 또는 음수"
console.log( result_data);

//이름이라는 변수에 저장된 값이 빈문자열이면 이름없음 값이있으면이름있음 출력

let user_Name = ' ';
// let result_name = (Boolean(user_Name)) ? "이름 있음" : "이름 없음"
let result_name = (user_Name) ? "이름 있음" : "이름 없음"
console.log( result_name);

//nulisg 연산자 ??
//값이  null 이거나 undefined 일 때 기본값을 설정
// let data1 = null;
let data1 = "input data";
let result_data1 = data1 ?? "guest";
console.log(result_data1);

///값을 인풋데이터로 입력하면 입력값이 나옴 null 없으면 게스트가 출력


//옵셔널 체이닝 연산자 ?.
//존재하지 않는 데이터가 있을 경우 오류 없이 처리


let data2 = null;
// let result_data1 = data1 ?? "guest";    ?? 앞에 있는 값이 없으면 입력값처리
// console.log(data2.data);  // 이렇게 쓰면 오류가 남
console.log(data2?.data);
//  ?. 점일경우에는 앞에 있는 값이 없으면 undefined 로 처리


// let data1 = "input data";
// let result_data1 = data1 ?? "guest";
// console.log(result_data1);


/*
평서문 위에서 아래로 흐르는
제어문의 종류 1 조건문 2 반복문으로 구분
1 조건문 조건에 의해서 다른곳으로(선택문으로도 볼 수 있다)
if(다중 if 문) swith-case(선택문) 조건연산자, &&연산
2 반복문
for  for-in  for-of
while, do-while


자료형: 간접 참조형
배열, 객체> 가장 중요

객체를 만들어서 반복문으로 복사해서 사용 하는 경우가 많기에 예를들면 컴포넌트~
반복문이 가장 많이 사용될 문
그리고 배열과 객체를 가장 많이 사용
*/
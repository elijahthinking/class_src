/**
 * datatype 자료형
 * 프로그램에서 처리할 자료의 형태
 * typeof
 * 숫자형 정수, 실수(소수점)
 * 문자열 
 * boolean
 */

console.log(5+3);
console.log(0.1+0.2); //0.3 
// js 는 정수계산은 하지만 실수계산은 정확하지 않은편

//문자열 : ''     ""       `${}` +

let userName = "홍길동"; //홍+길+동
console.log("안녕하세요"+ userName + "님");
console.log('안녕하세요 ${userName} ');   // #{}

// undefined
// let data;
// console.log(data);

let data;
userName = null;
console.log( data );
console.log( userName );

/**
 * 간접참조형 :              어느곳에 다량의 데이터를 만들어서 준비해 놓고 연결하는 것
 * 배열, 객체, 함수
 * 배열 : 하나의 변수에 여러개의 값을 저장
 * 변수명 =[값,값,값,값,값,값,..];
 */

let colors = ['red', 'green', 'blue']         //인덱스 번호 아는 방법 찾기
console.log(colors[1]);
console.log(colors.length);

let txt = "홍길동";
let add = txt;
console.log(txt, add);
txt = "카리나"
console.log(txt, add);

let a = [1, 2, 3];      //인덱스 번호 0 123
let b = a;
console.log(a, b);
// a=[5, 6, 7, 8];
// console.log(a, b);
// a[4] = 9;
// console.log(a, b);
a[3]=9;
console.log(a, b);



//주소값이 저장되는 형태
let c = ['홍길동',4,false]
console.log(c[0]);
let d = c;
console.log(c===d);
c[3] = 100;
console.log( d );
console.log
/**
 * 객체 : 여러개의 유형을 하나로 묶어 놓은 것 object
 * js 는 배열과 함수도 객체로 취급합니다
 * 객체는 키:값 (프로퍼티 속성)
 * 변수명 = {
 * 키:값,(프로퍼티)}
 */

let person = {
  user: "홍길동",
  age: 30,
  phone: "010-1234-5678"
}


console.log( person.user);  //펄슨 안에 유저를 불러옴
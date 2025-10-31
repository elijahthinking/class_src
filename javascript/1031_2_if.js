/* 
조건문 선택문
조건의 결과가 참일 경우만 코드 실행
조건연산자(조건식) ? true:false;
if(조건식)
조건이 참일경우;


*/


//나이가 19이상?   age>19
// 참 > 성인 , 
// 거짓 미성년자 출력

let age=20;
let result = '';
result = (age>19) ? "성인":"미성년자"
console.log(result)

// if문으로 작성시
//{}는 가독성을 위해 한칸을 보통 내려서 사용 , 연달아써도 무방
// if(age>19)  if (age>19)  여기도 여백이 있어도 무방 
if(age>19){
//참일경우
result = "성인";
//else 는 관행으로 붙혀주는 편 거짓
} else{
  result = "미성년자";
}   
console.log("결과는" , result);


result = Boolean(10>5); //true
result = Boolean(3=='3'); //true
result = Boolean(3==='3'); //false
result = Boolean('hello'); //true
result = Boolean(''); //false ''  0  null
console.log("결과는" , result);


//변수에 숫자를 저장 후 양수 인지, 음수인지, 0인지 구분
//조건이 숫자>0
//참 양수 출력
// 거짓 숫자<0
//    참 음수
//    거짓 0

let num = 10;
if(num>0){
  console.log("양수입니다");
} else if (num<0) {
  console.log("음수입니다");
} else{
  console.log("0입니다");
}

//5의 배수는 "5의 배수입니다" 출력, 아니면 "아닙니다" 출력\
// 조건 : 숫자 %5 === 0
// 참 "5의배수입니다"
// 거짓 "아닙니다"

num = 10;
if(num%5===0){
  console.log("5의배수입니다");
} else{
  console.log("아닙니다")}



  /*사용자가 로그인했을때
  참 환영 합니다
  거짓 로그인을 하세요
  */
 
  let login = false ;
  if( login){
    console.log("환영합니다")
  } else {
    console.log("로그인을 하세요")}

    /*
    현재시간에 따라
    0 ~12 사이 좋은 아침입니다
    13~18 사이 좋은 오후입니다
    18 23 사이 좋은 저녁입니다
    */
let hour = 11 ;
if( hour < 12 )
  {console.log("좋은 아침입니다")
  }else if (hour < 18 ) {
    console.log("좋은 오후입니다")}
  else{console.log("좋은 저녁입니다")}




  /* */
//   =  ;
// let  =  ;
// if(){console.log("");}
// else{console.log("");}
// else if ("") {console.log("");}
// let = ;
// console.log("");
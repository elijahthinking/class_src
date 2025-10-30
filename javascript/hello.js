// console.console.log("hello js");
/*
변수 : 변하는 데이터를 저장 할 수 있는 저장 공간
변수 선언시 사용하는 키워드
var : 과거 문법(지양)
최근에는 아래의 문법을 사용 
let 변수를 선언하는 키워드
const 상수(고정된 수, 변하지 않는 수)
*/
// let 변수명;

/*
변수명을 만드는 규칙
1. 숫자로 시작 x 2. 대소문자 구분 A, a 3. 의미있는 이름 사용 금지 : class, id, name
4. 변수를 사용 할 때는 무엇을 담는지 명확히 기재
5. 예약어 사용금지 : let, var 6.한글 사용 가능 but 깨짐 발생 비추
7.특수문자 제한적 . 금지  . , -  n # * % @ --> 가능  $  _
8. 상수는 일반적으로 대문자로 구성~ 관례  
*/

let userName;  //변수선언
console.log(userName); //undefined
username = '홍길동';
console.log(username);

let age = 5;
console.log( age );
age = '춘향이';
console.log( age );

const site ='mbc';
console.log( site );
site = 5;
console.log( site );
// console.log(  );
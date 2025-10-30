/*증감연산자
증감연산자(단항연산자 ) ++ --
변수 ++  ++변수 변수--  --변수
1 씩증가하거나 1씩 감소를 할 때 사용
*/


// let a=5;
// let b=a++;
// console.log( 'a=', a); //6   5를먼저 저장하고 증가 
// console.log( 'b=', b); //5    비값은 5값을 저장한 상태

// let a = 5;
// let b = ++a;
// console.log( 'a=', a); //6  
// console.log( 'b=', b); //5 
// 연산자 순서차이 체크


// b = a--;
// console.log( 'a=', a); //  
// console.log( 'b=', b); //5
// // // a=5 b=6

// a=++b;
// console.log ('a=', a, b=', b);
//   //a=7, b=7


// //a=7, b=7


let c=8;
let d=2;

c++; //+1  c에 증가되는 숫자 c=9 앞에 처리되는 것이 없기에 1을 증가
console.log( 'c=', c )  //처리
--c; //-1 이 되기에 
console.log( 'c=', c ) //c=8
console.log( 'c++', c ) // 8    처리가 먼저 찍히니 8만 찍히고 더하기가 뒤에 가므로
console.log(  c ) ; // c= 9
c++; // c 10
c++; // c 11
d=c; //c가 11인 상태를 d에 저장하기에 d 가 11
console.log(  'd=',d ) ; //d 11 
console.log(  --d ) ; //d=10

//연산이 먼저 앞에 오면 연산이 먼저,  연산이 뒤에 있으면 처리 하고 값을 츨력

let i=5;
console.log(  i++ + ++i ) ; //12  5가 증가 6인상태에서  +  출력이 먼저니까 5 더해지니까 6 아래 거가 6인상태에 하나가 증가되니까 7  결과값은 12
console.log(  i ) ; //7

let score = 0;  
score++;  // 더하기 1
score++; 2  //더하기 1 2
score += 5;    // 스코어값 2에 5를 더한 값은 7
console.log('score=' , score ); //7 위값을 출력하면 7

/**
 * for 시작값과 종료값 반복이 몇번 되다는 조건이 있음 반복횟수를 알고 있는 상태
 * while, do-while 언제 종료될지 모름 반복횟수를 미리 알지 못할 떄
 * 
 * 무한반복 : 반복문장안에 종료조건을 꼭 줘야 한다
 * while(조건식){
 *       반복문장;
 * }
 * 
 * 
 * do{
 * 반복문장;
 * }while(조건식)
 */


/**
 * 1~5까지 반복 하면서
 * 1번째 반복입니다
 * ~~5번쨰 반복입니다를 츌력
 */

// for (let i=1; i<6; i++){
//   console.log(`${i}번째 반복입니다`);
// }

// let i=1; 
// while( i<6){
// console.log(`${i}번째 반복입니다`);
// i++;
// }
// console.log("종료");

// let i=9;
// do{
// console.log(`${i}번째 반복입니다`);
// i++;
// } while(i<6);
// console.log("종료");

//while 은 한번도 실행 안될수도 있지만 do while 은 무조건 한번은 실행


/**
 * break, continue;
 * i 값을 하나씩 증가시켜 가면서 i=5가 되면 멈춤
 */

//종료 될수 있는 조건을 구상
// let i=0;
// while(true){
//   i++;
//   console.log(i);
//   if( i === 5){
//     break;
//   }
// }


//continue
let i=0;
while(i<10){
  i++;
  if( i === 5){
    //breack
    continue;
    console.log(i);  //실행 될 수 없는 코드는 접근할수 없는 코드로 색이변경
  }
}
console.log("종료");
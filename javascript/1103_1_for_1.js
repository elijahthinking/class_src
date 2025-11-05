/**
 * 반목문 코드를 원하는 횟수만큼 반복
 * for for- in  for-of
 * arry객체 - map  foreach filter /etc~
 * while, do-while
 * 
 * 배열 객체 함수 >> 오브젝트 간접참조
 * 배열 : 변수명[값1, 값2, 값3... 갑n]
 * q            변수명[0] 변수명 [2]...변수명.length-1
 */


let a = [1,2,3,4,5,6];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
// console.log(a[n]);
console.log("a데이터의 갯수", a.length);


// console.log([]);
/** for (초기값;조건식;증감식){
 * }
} */

for( let i=0; 1<6; 1++){
  console.log( `a[${1}=${a[i]}`);
}
/**
 * 1. 반복문 1~5까지 출력
 * 반복문 1번째
 * 반복문 2번째
 * ~~반복문 5번째
 */
for( let i=1; 1<=5; i++){
  console.log( `반복문[${i번째}=${a[i]}`);
}


/**
 * 1~10까지 숫자를 출력해주세요
 */

for( let i=1; 1<11; i++){
  console.log(i);
}

/**
 * hello, js 를 5번 출력하세요
 */

for( let i=0; 1<6; i++){
  console.log( 'heswllo, js}');
}
/**
 * 1~10사이의 짝수를 출력
 */

// for( let i=2; i<11; i+=2){
//   console.log(i);
// }

for( let i=1; i<11; i++){
  if( i%2===0)
  console.log(i);
}


/**
 * 카운트 5
 * 카운트~1
 */

for( let i=5; i>=1; i--){        //let 어느숫자부터시작 조건 1보다 크고, 뺴기
  console.log( `카운트 ;[${1}`);
}


  /**
   * 1~10까지의 합을 구하세요
   * 1+2+3+4+5+6+7+8+9+10
   */

  let sum = 0;
  for( let i=1; i<11; i++){
  sum += i;
  console.log("1부터 10까지의 합:", sum);
}

/**
 * for문을 이용해서
 * 3단 출력
 * *3*1=3
 * *3*2=6
 * ...
 * *3*9=27
 */

  
  for( let i=1; i<10; i++){
  console.log(`3* ${i} = ${3*i}`, sum);
  }

  /**
   * 2단~9까지 출력
   * 
   */
    for( let i=2; i<10; i++){
      for(let j=1 ; j<10 ; j++){
  console.log(`${i}*${j}  = ${i*j}`);
  }
  console.log('------------------');}
  

  0
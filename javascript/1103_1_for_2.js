/**
 * 배열과 같이 사용 되는  for
 * for-of문
 */

let colors=['red', 'green','blue'];

/**
/**
 * color-1 ; red 0 color[0]
 * color-1 ; green 1 color[1]
 * color-1 ; blue 2 color[2]
 */
 

//  for( let i=0; i<3; i++){
//       document.write('<div>')
//         document.write(`<h2>$(i단</h2>`)}
//       for(let j=1 ; j<10 ; j++){
//         document.write(`<p>${i}*${j}  = ${i*j}</p>`);}

//  for( let i=0; i<colors.length; i++){
//   console.log('color-${i+1}: ${colors[i]]');};
  

//  for( let colors of colors){
//   console.log('색상'); $(colors)};
      

  /**
   * 객체 : 모든 사물
   *        키 : 값,(프로퍼티)
   */


  let user ={
    user_name : '홍길동',
    age: 30,
    job: '의적'
  }
  console.log ( user.job);


  /**
   * for-in
   */

  for( let key in user ) {
    console.log( user[key])
  }
/**
 * 문자열 문자들의 결합 h+e+l+l+o
 * 문자열은 배열로 처리가능
 */
  let txt = 'hello';
  console.log(txt[1])







  // console.log
// 짝수와 홀수 https://programmers.co.kr/learn/courses/30/lessons/12937
// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.


// function solution(num) {
//   var answer = '';
//   return answer;
// }

let num = 0; 
let answer = '';

if ( num % 2 === 0 ) {
  answer = 'Even'
} else {
  answer = 'Odd'
}

console.log(answer)


// 다른사람 답 1. 이건 뭔지도 모르겠다
function evenOrOdd(num) { 
  return num % 2 ? "Odd" : "Even";
}

// 다른사람 답 2 음수 거르는 옵션 추가하셨네
function evenOrOdd(num) {
  var result = 'Even';
  if(num < 0) return false;
  if(num % 2 == 1) result = 'Odd';
  return result;
}


// 문자열 다루기 기본 https://programmers.co.kr/learn/courses/30/lessons/12918

let answer = false; // 답의 초깃값은 false

s = "234e"

if (s.length == 4 || s.length == 6) { //문자열의 길이가 4 또는 6이라면
  answer = parseInt(s) == s  // s를 정수로 변환한 값이 s가 맞는지 확인한다!
} 

console.log(answer)

// 틀렸던 답안.

if (s.length == 4 || s.length == 6) {
  answer = s*1 == s }  
// -> 93.8% 맞았다는데 왜...?
// ㅋㅋㅋㅋ 정수만 통과시켜야 하는거였다!

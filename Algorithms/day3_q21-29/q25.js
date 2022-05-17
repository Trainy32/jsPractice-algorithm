// 정수 제곱근 판별 https://programmers.co.kr/learn/courses/30/lessons/12934


let n = 121	
let answer = 0

if (Math.sqrt(n)%1 === 0) { //n의 제곱근이 정수라면
  answer = (Math.sqrt(n)+1) ** 2 // 정답은 n의 제곱근+1을 제곱한 값이다
} else { answer = -1} //만약 아니라면, 정답은 -1 이다.


console.log(answer)
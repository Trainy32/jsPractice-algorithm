// 약수의 개수와 덧셈 https://programmers.co.kr/learn/courses/30/lessons/77884


function solution(left, right) {
  let divisors = 0;
  let counter = 0;

  for (i=left; i<=right; i++) { //왼쪽부터 오른쪽까지 수를 하나씩
    for(j=1; j<=i; j++) { //소수를 찾기위해 반복문을 돌린다
      if(i%j === 0) { counter++ } //숫자가 i로 나누어 떨어진다면 카운터 ++
    }
    if (counter%2 === 0) { // 소수가 짝수라면
      divisors += i  // i를 결과값에 더하고
      counter = 0 // 카운터 초기화
    } else {
      divisors -= i // 이외에는 결과값에서 빼고
      counter = 0 // 카운터 초기화
    }
  }

  return divisors;
}

console.log(solution(13,17))


// 다른사람 풀이.
// 제곱근이 정수면, 약수의 갯수가 홀수라고 한다..
// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//       if (Number.isInteger(Math.sqrt(i))) {
//           answer -= i;
//       } else {
//           answer += i;
//       }
//   }
//   return answer;
// }
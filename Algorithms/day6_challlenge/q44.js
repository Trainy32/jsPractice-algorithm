// 최대공약수와 최소공배수 https://programmers.co.kr/learn/courses/30/lessons/12940

let n = 2
let m = 5

// 두 자연수의 곱은 최대공약수 * 최소 공배수 이다. 따라서, 둘 중 하나를 먼저 구해본다.
// 일단은 최대공약수를 먼저 구해보기로 했다 :)

let temp_n = n
let temp_m = m

let answer = []

for (i=n; i>0; i--) {  // 한 숫자에서 시작해서 1씩 줄여가며 반복
  if( m % i === 0 && n % i === 0) { // 최대 공약수를 발견하면
    console.log(i)
    answer.push(i) // 정답배열에 넣고
    break; // 바로 반복문을 종료해요
  }
}

answer.push(n*m/answer[0])  // 두 수를 곱한것을 최대공약수로 나누면 최소공배수를 구할 수있음

console.log(answer)


// 다른사람답변

// function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
// function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
// function gcdlcm(a, b) {
//     return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
// }
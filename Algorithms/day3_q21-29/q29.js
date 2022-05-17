// 3진법 뒤집기 https://programmers.co.kr/learn/courses/30/lessons/68935


let n = 125
let answer = 0
let arr = []

while (n >= 3) { //n이 3보다 작은 동안 
  arr.unshift(Math.floor(n%3)) // n을 3으로 나눈 나머지를 배열에 넣고 (소숫점무시)
  n /= 3 // n을 3으로 나눈값을 다시 n에 저장한다
} 
arr.unshift(Math.floor(n)) // 마지막으로 남은 n을 다시 배열에 넣고

for (i=0; i<arr.length; i++) { // 배열의 길이만큼
  answer += arr[i] * (3 ** i) // 다시 10진수로 바꾼다
}

console.log(answer)


// 다른사람 답안
// function solution(n) {
//   return parseInt(n.toString(3).split('').reverse().join(''), 3);
// }

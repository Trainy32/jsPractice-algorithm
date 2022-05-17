// 자연수 뒤집어 배열로 만들기 https://programmers.co.kr/learn/courses/30/lessons/12932

let n = 2813791273128

let answer = n.toString().split('').reverse() //주어진 숫자를 -> 문자열 -> 배열로 바꾸고 뒤집기 
for (i = 0; i < answer.length; i++) { 
  answer[i] = answer[i]*1 // 값을 숫자로 만들어주기;
}

console.log(answer)
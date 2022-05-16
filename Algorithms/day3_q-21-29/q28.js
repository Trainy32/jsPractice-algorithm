// 하샤드 수 https://programmers.co.kr/learn/courses/30/lessons/12947

let x = 13
let answer = true

answer = x % x.toString().split('').reduce(function(sum,num){return sum*1+num*1}) === 0
// x를 문자열로 -> 한글자씩 쪼개기 -> 하나씩 더하기 (*1로 숫자로 만듬) -> 나머지가 0인지 검증

console.log(answer)
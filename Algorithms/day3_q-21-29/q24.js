//정수 내림차순으로 배치하기 https://programmers.co.kr/learn/courses/30/lessons/12933

let n = 2813791273128

let answer = n.toString().split('').sort(function(a,b){return b-a}).join('')*1 
//주어진 숫자를 -> 문자열 -> 배열로 바꾸고 -> 정렬 -> 합쳐서 -> 다시 문자열로

console.log(answer)
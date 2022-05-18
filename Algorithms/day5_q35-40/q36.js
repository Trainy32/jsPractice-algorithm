// 문자열 내림차순으로 배치하기 https://programmers.co.kr/learn/courses/30/lessons/12917

let s = "ZAbcdefg"
let answer = 0
let upper = []

s = s.split('').sort().reverse() // 쪼개고, 내림차순 정렬 후 , 뒤집음
console.log(s)


// 문자열 내 마음대로 정렬하기 https://programmers.co.kr/learn/courses/30/lessons/12915

let strings = ["abce", "abcd", "cdx"]
let n = 1
let answer = 0

// for (i=0; i < strings.length; i++) {
//   strings[i] = strings[i].split('')
// } ??? 왜 쪼개놓으면 오히려 오류가 뜨는가? 안쪼개도 된다는건 좋지만..

strings = strings.sort(function(a,b) {
  if (a[n] > b[n])  return 1 
  else if (a[n] < b[n]) return -1
  else if (a[n] = b[n] && a > b) return 1 
  else if (a[n] = b[n] && a < b) return -1 
  else return 0 
})

console.log(strings)


// 시저 암호 https://programmers.co.kr/learn/courses/30/lessons/12926

let s = 'a B z'
let n = 4

let answer = '' 
let lowerCases = 'abcdefghijklmnopqrstuvwxyz' // 소문자 배열 생성
let upperCases = lowerCases.toUpperCase()  // 대문자 배열 생성

s = s.split('') // 우선 주어진 문자열을 쪼개고
 
for (i=0; i<s.length; i++) { //문자열 길이만큼
  if (s[i] === ' ') { continue }  // 공백은 패스한다
  else if (s[i] === s[i].toUpperCase()) { //대문자일경우, 대문자 배열에서 s[i]의 인덱스 + 4 번째 알파벳을 찾아 돌려준다
    s[i] = upperCases[(upperCases.indexOf(s[i])+n)%26] 
  } else { // 소문자일경우, 소문자 배열에서 같은 작업
    s[i] = lowerCases[(lowerCases.indexOf(s[i])+n)%26]
  }

}

s = s.join('') // 다시 문자열로 합친다.

console.log(s)


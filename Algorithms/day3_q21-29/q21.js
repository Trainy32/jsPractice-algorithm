// 이상한 문자 만들기 https://programmers.co.kr/learn/courses/30/lessons/12930

let answer = ''
let s = "try hello world"
let words = s.toLowerCase().split(' ') // 우선 문자열을 단어단위로 쪼개서 소문자로 통일시킨뒤
let alphabets = []


for(i=0; i<words.length; i++) { // 단어 갯수만큼 실행
  alphabets = words[i].split('') // 단어를 알파벳으로 쪼갬
  for (j=0; j<alphabets.length; j++) { //단어의 길이만큼
    if (j % 2 == 0) { answer += alphabets[j].toUpperCase() } // 짝수번째 알파벳은 대문자로 answer에 추가
    else { answer += alphabets[j] } // 홀수번째 알파벳은 소문자로 answer에 추가
  }
  answer += ' ' // 단어 끝에 공백 추가
}

console.log(answer.replace(/.$/, ''))  // 맨 마지막 글자를 삭제 한 다음 답변 출력


// 다른사람 답변
// function toWeirdCase(s){
//   return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
// }

// console.log("결과 : " + toWeirdCase("try hello world"));
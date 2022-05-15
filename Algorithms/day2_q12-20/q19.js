// 수박수박수박수박수박수? https://programmers.co.kr/learn/courses/30/lessons/12922

let n = 3
let answer = '';
let subak = ["수", "박"]

for (i=0; i<n; i++) { //n번 만큼 실행한다
  answer += subak[i%2] //홀수번째 실행에는 수, 짝수번째 실행에는 박을 답에 추가
}


console.log(answer)
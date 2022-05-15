// 수박수박수박수박수박수? https://programmers.co.kr/learn/courses/30/lessons/12922

let n = 3
let answer = '';
let subak = ["수", "박"]

for (i=0; i<n; i++) {
  answer += subak[i%2]
}


console.log(answer)
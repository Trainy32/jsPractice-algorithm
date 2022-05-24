// 나머지가 1이 되는 수 찾기 https://programmers.co.kr/learn/courses/30/lessons/87389

let n = 12
let answer = 0


for (i=0; i<n; i++) {
  if ( n%i === 1 ) {
    answer = i
    break
  }
}

console.log(answer)


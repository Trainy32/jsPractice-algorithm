// 약수의 합 https://programmers.co.kr/learn/courses/30/lessons/12928


let n = 26
let answer = 0

for (i=0; i<=n; i++) {
  if (n%i === 0) {
    answer += i
  }
}

console.log(answer)


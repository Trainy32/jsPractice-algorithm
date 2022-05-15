// 나누어 떨어지는 숫자 배열 https://programmers.co.kr/learn/courses/30/lessons/12910
// 내꺼!!

let answer = [];

let arr = [5, 9, 7, 10]
let divisor = 777

for (i=0; i < arr.length; i++) {
  if ( arr[i] % divisor == 0) {
    answer.push(arr[i])
  }
}

if (answer[0] == []) { answer[0] = -1 }

answer.sort()

console.log(answer[0])

console.log(answer)
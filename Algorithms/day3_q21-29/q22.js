// 자릿수 더하기 https://programmers.co.kr/learn/courses/30/lessons/12931
// 내꺼!!

let answer = 0
n = 987

numbers = n.toString().split('')  // 일단 문자열로 변경 후 쪼개주고
for (i=0; i<numbers.length; i++) { // 자릿수만큼 반복해서
  answer += numbers[i]*1 // i번째 자리를 숫자로 바꿔서 답에 더해준다.
}


console.log(answer)
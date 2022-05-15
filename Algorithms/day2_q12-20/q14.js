// 나누어 떨어지는 숫자 배열 https://programmers.co.kr/learn/courses/30/lessons/12910
// 내꺼!!

let answer = [];

let arr = [5, 9, 7, 10]
let divisor = 5

for (i=0; i < arr.length; i++) { // 우선 배열의 길이만큼
  if ( arr[i] % divisor == 0) { // divisor로 나누어지는 값을
    answer.push(arr[i]) // answer 배열에 밀어 넣는다!
  }
}

if ( answer == 0) { // 만약 answer이 받은 값이 없으면
 answer.push(-1) // answer는 -1
}

answer.sort(function(a,b){ //answer를 정렬해준다
  if(a > b) return 1;
  if(a === b) return 0;
  if(a < b) return -1;
})

console.log(answer)

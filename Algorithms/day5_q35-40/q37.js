// 소수 만들기 https://programmers.co.kr/learn/courses/30/lessons/12977


let nums = [1,2,3,4]
let answer = 0
let temp = 0
let temp2 = 0

for (i=0; i < nums.length; i++) { 
  for (j=i+1; j < nums.length; j++) {
    for (k=j+1; k < nums.length; k++) { // for문을 중첩시켜 모든 조합을 찾음
      temp = nums[i] + nums[j] + nums[k] //숫자 3개의 조합을 temp에 넣음

      for (l=2; l<temp; l++) {  // temp를 2 부터 temp-1 까지의 수로 나누어봄 
        temp2 += temp%l === 0 // 만약 temp가 무언가로 나누어 떨어진다면 temp2 에 숫자가 올라감
      }

      if (temp2 === 0) { // 나누어지는 값이 없었을때만
        answer = answer +1 // 정답에 1 추가
        temp2 = 0 //그리고 temp2 초기화
      } else {temp2 = 0}  //소수가 아니었어도 temp2 초기화
      
    }
  }
}

console.log(answer)
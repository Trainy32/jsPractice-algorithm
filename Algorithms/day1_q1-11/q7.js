// 음양 더하기 https://programmers.co.kr/learn/courses/30/lessons/76501

let answer = 0;
let absolutes = [4,7,12]
let signs = [true,false,true]
let sign = 1

for (i=0; i< absolutes.length; i++) {  // 주어진 배열의 길이만큼 반복 실행
  if (!signs[i]) { // i 번째의 부호가 false (음수) 면~
    sign = -1 // sign은 -1!
  } else { // 양수면
    sign = 1 // sign은 그냥 1!
  }
  answer += absolutes[i] * sign // i번째의 숫자에 sign을 곱해서 부호를 만들어주고, 더해서 저장!
}

// 두 개 뽑아서 더하기 https://programmers.co.kr/learn/courses/30/lessons/68644


let numbers = [2,1,3,4,1]
let answer = []

for (i=0; i < numbers.length; i++) { // 배열 길이만큼 실행
  for (j=1; j < numbers.length-i; j++) { // 배열 길이에서 현재 인덱스를 뺀 횟수 만큼 실행 (이미 계산되었으므로)
    if(answer.indexOf(numbers[i]+numbers[i+j]) >= 0) {continue} // 만약 아래서 넣으려는 값이 이미 답안배열에 있다면 건너뜀
    answer.push(numbers[i]+numbers[i+j]) // 답안 배열에 추가
  }
}
answer.sort(function(a,b){return a-b}) // 오름차순으로 정렬 

console.log(answer)


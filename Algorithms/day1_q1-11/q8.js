// 평균 구하기 https://programmers.co.kr/learn/courses/30/lessons/12944

arr = [1,2,3,4]	
// [5,5]
answer = 0;

for (i=0; i<arr.length; i++) { // 배열의 길이만큼 반복해서
  answer += arr[i]  // answer에 배열의 i번째 값을 더해주고
}

answer = answer / arr.length // 모두 더한 값을 배열의 길이로 나누면 완성!

console.log(answer)


// 다른사람 답변 reduce 자주 보인다 알아보자

// function average(array){
//   return array.reduce((a, b) => a + b) / array.length;
// }
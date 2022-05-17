// 같은 숫자는 싫어 https://programmers.co.kr/learn/courses/30/lessons/12906

let arr = [4,4,4,3,3]
let answer = []

// 타임아웃 
// let i = 0
// while (i < arr.length) {
//   if (arr[i] == arr[i+1]) {
//     arr.splice(i+1, 1) 
//   } else { i++ }
// }

for (i=0; i < arr.length; i++) { //배열의 길이만큼 반복해서
  if (arr[i] !== arr[i+1]) { // i번째 값이 i+1 값과 다를때만
    answer.push(arr[i]) // 답안에 추가한다.
  } 
}

console.log(answer)


// 다른사람 답변
// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }
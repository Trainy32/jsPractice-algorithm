// 행렬의 덧셈 https://programmers.co.kr/learn/courses/30/lessons/12950
// 기대값 [[4,6],[7,9]]

let arr1 = [[1,2],[2,3]]
let arr2 = [[3,4],[5,6]]	
let answer = []

for (i=0; i<arr1.length; i++) { // 배열의 길이 만큼 실행합니다
  answer[i] = []; // 정답의 i번째 배열 칸 만들어주기?
  
  for (j=0; j<arr1[i].length; j++) { // 이건 배열 안의 배열의 길이만큼 실행해요.
     answer[i][j] = arr1[i][j] + arr2[i][j]  // 정답의 i번째 배열의 j는 첫번째와 두번째 배열의 i번째 배열의 j를 합친것..
  }
}

console.log(answer)


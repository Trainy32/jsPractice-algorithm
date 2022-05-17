// 최소직사각형 https://programmers.co.kr/learn/courses/30/lessons/86491
// 내거

let sizes = [[60, 50], [130, 70], [60, 30], [80, 40]]
let answer = 0
let h = 0


for (i=0; i<sizes.length; i++) { // 명함 종류만큼 진행
  sizes[i].sort(function(a,b){return a-b}) //우선 가로값/세로값의 순서를 맞춘다
  if (h < sizes[i][1]) {  // 세로값 중 가장 큰 것은 따로 저장시킴
    h = sizes[i][1]
  }
  sizes[i].pop() // 배열에서 세로값 빼버리기
}

sizes.sort(function(a,b){return b-a}) // 이제 가로값만 남은 배열을 내림차순으로 다시 정렬


console.log(sizes[0]*h) // 가장 큰 가로값과 가장큰 세로값 곱해주기


// 다른사람답변 : math. min/max 메서드를 사용하는 방법

// function solution(sizes) {
//     sizes.map((item) => item.sort((a, b) => b - a));
//     let hMax = Math.max.apply(null, sizes.map((item) => item[0]));
//     let vMax = Math.max.apply(null, sizes.map((item) => item[1]));
//     return hMax * vMax;
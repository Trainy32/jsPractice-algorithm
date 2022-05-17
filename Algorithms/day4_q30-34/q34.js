// 모의고사 https://programmers.co.kr/learn/courses/30/lessons/42840
// 내거

let answers = [3, 3, 1, 1, 1, 1, 2, 3, 4, 5]
let students = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]] // 학생들의 답안 패턴을 배열로 작성
let scores = [0,0,0] // 점수를 기록할 배열을 선언 -> 아래서 숫자로 연산할 것이므로 미리 0을 넣어둠.
let rank = [] //최종으로 리턴할 값인 순위!

for(i=0; i<answers.length; i++) { // 문제수 만큼 반복해서
  scores[0] += answers[i] === students[0][i%students[0].length] // true = 1 인것을 이용해
  scores[1] += answers[i] === students[1][i%students[1].length] // score 배열 안에 각 학생의 점수를 기록함
  scores[2] += answers[i] === students[2][i%students[2].length]
}

for(i=0; i<3; i++){ //학생 수 만큼 반복해서
  if (scores[i] == Math.max(...scores)){ // i번째 학생의 점수와 최대 점수가 같다면
    rank.push(i+1) // 학생 번호를 순위 배열에 넣어요
  }
}

console.log(scores)
console.log(rank)
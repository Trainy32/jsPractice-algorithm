// 실패율 https://programmers.co.kr/learn/courses/30/lessons/42889

let N = 5
let stages = [2, 1, 2, 6, 2, 4, 3, 3]
let answer = []
let rate = []

for (i=0; i<N; i++) { // 실패율 찾기
  let challenger = stages.filter((stage) => stage>=i+1)
  let unClear = challenger.filter((stage) => stage === i+1)

  if(challenger.length !== 0) {
    rate.push(unClear.length/challenger.length)
  } else {
    rate.push(0)
  }
}

while (answer.length < N) { // 답안에 내림차순으로 인덱스번호+1 넣기
  answer.push(rate.indexOf(Math.max(...rate))+1)
  rate[rate.indexOf(Math.max(...rate))] = -1
}


// 2트: 1트도 성공했지만 다른사람 답변 보고 수정해서. 아주 조금 빨라진다.
answer = []
rate = []

for (i=0; i<N; i++) { // 실패율
  let challenger = stages.filter((stage) => stage>=i+1)
  let unClear = challenger.filter((stage) => stage === i+1)

  if(challenger.length !== 0) {
    rate.push([i+1, unClear.length/challenger.length])
  } else {
    rate.push([i+1,0])
  }
}

rate.sort((a,b) => b[1]-a[1])
answer = rate.map((n) => n[0])


console.log(answer)
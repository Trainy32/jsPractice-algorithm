// 로또의 최고 순위와 최저 순위 https://programmers.co.kr/learn/courses/30/lessons/77484

let lottos = [44, 1, 0, 0, 31, 25]
let win_nums = 	[31, 10, 45, 1, 6, 19]

let answer = []
let count = 0
let erased = 0

for (i=0; i<6; i++) { // 6번 실행
  if (lottos[i] === 0) { // 만약 지워진 숫자면
    erased++ // 지워진 숫자 카운트
  } else if (win_nums.indexOf(lottos[i]) != -1) { //만약 당첨번호면
    count ++ // 당첨번호 카운트
  }
}

answer = [(6+(count+erased > 0))-(count+erased), (6+(count > 0))-count]
// 일치 번호가 1개 이상인 경우 7(6+true) - 일치번호 = 등수, 하나도 안맞았으면 6(6+false) - 0 = 6등!

console.log(answer)


// 예산 https://programmers.co.kr/learn/courses/30/lessons/12982


let d = [1,3,2,5,4]
let budget = 9
let answer = 0

//먼저 오름차순 정렬해서 작은 수 부터 빼게 만들고
d = d.sort((a,b) => (a-b))

 
 for (i=0; i<d.length; i++) { //부서 숫자만큼 반복해서
   budget -= d[i] //예산에서 신청한 금액을 빼되,

   if (budget<0) { break; } //예산이 0보다 작아지면 강제로 멈추고
   else { answer++ } //예산이 남았다면 정답 카운트를 올린다
 }

 console.log(d)


console.log(answer)


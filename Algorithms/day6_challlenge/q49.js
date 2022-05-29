// 체육복 https://programmers.co.kr/learn/courses/30/lessons/42862

let n = 10
let lost =  [1,2,3,10]
let reserve = [5,7]
let left =[]
answer = 0

lost = lost.map((student) => (student = [student, -1]) )
reserve = reserve.map((student) => (student = [student, +1]))
sum = [...reserve,...lost].sort((a,b) => a[0]-b[0])

for (i=1; i < sum.length; i++) {
  if (sum[i][1] <= 0) {
    continue

  } else if (sum[i][0] === sum[i+1][0]){
    sum[i][1] = 0
    sum[i+1][1] = 0
  } else if (sum[i-1][1] === -1 && sum[i][0]-1 === sum[i-1][0]) {
    sum[i][1] = 0
    sum[i-1][1] = 0
  } else if (sum[i+1][1] === -1  && sum[i][0]+1 === sum[i+1][0]) {
    sum[i][1] = 0
    sum[i+1][1] = 0
  } 
}
answer = n - (sum.filter((student)=> student[1] === -1)).length

// let answer = n - lost.length
// for (student of lost) {
//   let temp = reserve.map((cloths)=>{ cloths= ?  : cloths = 0 })

// }




console.log(answer)


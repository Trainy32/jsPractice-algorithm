// 신고 결과 받기 https://programmers.co.kr/learn/courses/30/lessons/92334

let id_list = ["muzi", "frodo", "apeach", "neo"]
let report = 	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
let k = 2

let reported_by = id_list.map((id) => [])
let answer = id_list.map((id) => 0)

report = report.map((r) => r.split(' ')).forEach((r, i) => {
  if (! reported_by[id_list.indexOf(r[1])].includes(r[0])) {
  reported_by[id_list.indexOf(r[1])].push(r[0])}
})

reported_by.forEach((r,i) => {
  if (r.length >= k) {
    r.forEach((user) => {
      answer[id_list.indexOf(user)] += 1
    })
  }
})


console.log(answer)
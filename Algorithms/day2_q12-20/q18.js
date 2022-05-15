// 서울에서 김서방 찾기 https://programmers.co.kr/learn/courses/30/lessons/12919
// 내꺼!!

let answer = 0;
let seoul = ["Jane", "Kim"]

let kim = seoul.indexOf("Kim") // 서울에서 "Kim"과 일치하는 값의 인덱스를 찾아서
answer = `김서방은 ${kim}에 있다` // 문자열에 넣기!

console.log(answer)

// 한줄로는 
answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`

console.log(answer)

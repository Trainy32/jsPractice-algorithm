// x만큼 간격이 있는 n개의 숫자 https://programmers.co.kr/learn/courses/30/lessons/12954/

let x = 2
let n = 5
let answer = new Array()


let num = 0

for (i=0; i<n; i++) { // n만큼 실행할거에요
    num += x  // X에 X를 더한 값을 
    answer.push(num) // answer 라는 배열에 밀어넣어요.
}

console.log(answer)
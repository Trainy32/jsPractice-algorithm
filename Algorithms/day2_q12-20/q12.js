// 부족한 금액 계산하기 https://programmers.co.kr/learn/courses/30/lessons/82612


let price = 3
let money = 20
let count = 4

let answer = 0;
let totalPrice = 0;

for (let i = 0; i <= count; i ++) {  //놀이 기구를 탈 횟수만큼 
  totalPrice += price * i   // 총 가격에 가격*횟수를 더해넣는다
}

answer = totalPrice - money // 총 가격에서 가진 돈을 빼면 부족한 돈이 나오고

if (answer < 0) { answer = 0 } // 남는 돈이 생기면 값을 0으로 돌려줌!

console.log(answer)


// 다른사람 답안 
// function solution(price, money, count) {
//   const tmp = price * count * (count + 1) / 2 - money;
//   return tmp > 0 ? tmp : 0;
// }

// 1 ~ x까지의 합 n * (n + 1) / 2인데 여기에 price배 만큼 곱해주는 거니까 (앞의 식) * price

// 또 다른 답안

// const solution = (..._) => Math.max(_[0]*_[2]*++_[2]/2-_[1], 0);
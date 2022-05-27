// 소수 찾기 https://programmers.co.kr/learn/courses/30/lessons/12921


let n = 121
let answer = 0

let temp = []
let prime = true

for(i=2; i <= Math.sqrt(n); i++) {
  for(j=2; j<i; j++) {
  prime = true
    if(i % j === 0){
      prime = false
      break;
    } 
  }
  if (prime === true) {
    temp.push(i)
  }
}

for(i=2; i<=n; i++) {
  prime = true
  for(j=0; j<temp.length; j++){
    if(i%temp[j] === 0 && i !== temp[j]) {
      prime = false
      break;
    }
  }
  if (prime === true) {
    answer++
  }
}
  

console.log(answer)


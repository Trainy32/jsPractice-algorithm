// 크레인 인형뽑기 게임 https://programmers.co.kr/learn/courses/30/lessons/64061

let answer = 0
let moves = [1,5,3,5,1,2,1,4]
let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]

let basket = []

moves.forEach((t) => {
  for (rows of board) {
    if (rows[t-1] !== 0) {
      basket.push(rows[t-1])
      rows[t-1] = 0
      break
    }
  }
})

while (basket.some((d,i) => d === basket[i+1])) {
  basket.forEach((d,i) => { 
    if (d === basket[i+1]) {
      basket.splice(i, 2)
      answer += 2
    }
  } )
}


console.log(answer)



// [카카오 인턴] 키패드 누르기 https://programmers.co.kr/learn/courses/30/lessons/67256

let answer = []
let result = "LRL LLR LL R R L"

"L L LLLRLLLRR"
"L R LLRRLLLRR"

let numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]
let hand = "left"

let num_pad = [[1, 4, 7, '*'], [2, 5, 8, 0], [3, 6, 9, '#']] 
let l_now = [ 0,3 ]
let r_now = [ 2,3 ]

hand = hand === "left" ? 'L' : 'R'

for (n of numbers) {

  if ( num_pad[0].includes(n) ) {
    answer.push('L')
    l_now = [ 0, num_pad[0].indexOf(n) ]
  } else if ( num_pad[2].includes(n) ) {
    answer.push('R')
    r_now = [ 2, num_pad[2].indexOf(n) ]
  } else {
    let n_now = []
    num_pad.forEach((column,i) => {
      if (column.includes(n)) { n_now = [i, column.indexOf(n)] }
    } )
    
    let l_distance = Math.abs(l_now[0] - n_now[0]) + Math.abs(l_now[1] - n_now[1])
    let r_distance = Math.abs(r_now[0] - n_now[0]) + Math.abs(r_now[1] - n_now[1])

    let finger = l_distance === r_distance ? hand : l_distance > r_distance ? 'R' : 'L'
    if (finger === 'L') { l_now = n_now }
    else { r_now = n_now }
    answer.push(finger)
  }
}

answer = answer.join('')

console.log(answer)
// [1차] 다트 게임 https://programmers.co.kr/learn/courses/30/lessons/17682


let exampleArray = ['1S2D*3T','1D2S#10S', '1D2S0T', '1S*2T*3S', '1D#2S*3S', '1T2D3D#',	'1D2S3T*' ]
let expectedAnswers = [37, 9, 3, 23, 5, -4, 59]
let dartResult = '10D4S10D'

let answer = dartResult.split('').map((s,i) => 
  s === 'S' ? dartResult[i-1] === '0' && dartResult[i-2] === '1' ? 10 : dartResult[i-1]**1 : 
  s === 'D' ? dartResult[i-1] === '0' && dartResult[i-2] === '1' ? 100 : dartResult[i-1]**2 : 
  s === 'T' ? dartResult[i-1] === '0' && dartResult[i-2] === '1' ? 1000 : dartResult[i-1]**3 : s)
  .filter((s) => typeof(s) === 'number' || s === '#' || s === '*' )
  .map((s,i,arr) => s === '#'? arr[i-1]*-1 : s)
  .reduce((acc,s,i,arr) => {
    let currentScore = s
    let prevBonus = 0
    if (currentScore < 0) {
      currentScore *= 2
    }
    if (s === "*") {
        currentScore = arr[i-1]
        prevBonus = arr[i-2] && arr[i-2] !== '*' ? arr[i-2] : arr[i-2] === '*' ? arr[i-3]*2 : 0
      }
    return acc + currentScore + prevBonus
  },0)


console.log(answer)



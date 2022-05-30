//  [1차] 비밀지도 https://programmers.co.kr/learn/courses/30/lessons/17681

let arr1 = [46, 33, 33 ,22, 31, 50]
let arr2 = [27 ,56, 19, 14, 14, 10]

let answer = []

let rowLength = Math.max(...arr1,...arr2).toString(2).split('').length
arr1 = arr1.map((rows) => rows.toString(2).split(''))
arr2 = arr2.map((rows) => rows.toString(2).split(''))

for (i=0; i<arr1.length; i++) {
  if (arr1[i].length < rowLength) { arr1[i].unshift(...'0'.repeat((rowLength - arr1[i].length)).split('')) }
  if (arr2[i].length < rowLength) { arr2[i].unshift(...'0'.repeat(rowLength - arr2[i].length).split('')) }

  answer.push(arr1[i].map((blocks, j) => { 
    blocks = blocks*1 + arr2[i][j]*1;
    return blocks > 0 ? '#' : ' ' } ).join(''))
}

console.log(answer)



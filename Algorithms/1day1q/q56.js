// 가장 큰 수 https://programmers.co.kr/learn/courses/30/lessons/42746

let numbers =  [100 , 1000]

let answer = ''

// answer = numbers.sort().reverse().join('')

// answer = numbers.map((n)=> n.toString()).sort().sort((a,b)=> {
//   for(i=0; i<a.length; i++) {
//     if( b[i] && a[i]>b[i] ) {
//       return -1
//     } else if (a[i]>b[b.length-1]){
//       return -1
//     }
//   }
// }).join('')

// if (parseInt(answer)=== 0) {
//   answer = 0
// }


answer = numbers.sort().reverse().join('')

answer = numbers.map((n)=> n.toString()).sort().sort((a,b)=> {
  for(i=0; i<a.length; i++) {
    if( b[i] && a[i]>b[i] ) {
      return -1
    } else if (a[i]>b[b.length-1]){
      return -1
    }
  }
  
}).join('')

if (parseInt(answer)=== 0) {
  answer = 0
}



console.log(answer)

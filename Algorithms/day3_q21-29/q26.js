// 제일 작은 수 제거하기 https://programmers.co.kr/learn/courses/30/lessons/12935
// 내꺼!!

let arr = [4,3,2,1]

if (arr.length > 1) { // 배열의 길이가 1보다 큰 경우에만
  arr.splice(arr.indexOf(Math.min.apply(null,arr)),1) // 가장 작은값의 인덱스를 찾아 삭제시킵니다.
} else { arr[0] = -1 } // 배열의 길이가 1이면 [-1]이 리턴됩니다. 


console.log(arr)
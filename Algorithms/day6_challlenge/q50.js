// 폰켓몬 https://programmers.co.kr/learn/courses/30/lessons/1845

let nums = [3,1,2,3]
let answer = 0

const pTypes = new Set(nums)
answer = nums.length/2 < pTypes.size ? nums.length/2 : pTypes.size

console.log(answer)



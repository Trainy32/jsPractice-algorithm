// 체크인, 체크아웃 시간 보고 1주일 공부시간 구하기! 
// 새벽 1시 = 24+1시 = 25시
// 29시 이후에 체크아웃시 21시에 체크아웃 한 것으로 간주


function solution(arr1, arr2){
	let answer=0;
  
  for (i = 0; i < arr1.length; i++) {
    if (arr2[i] < 29) {
      answer += arr2[i] - arr1[i]  
    } else {
      answer += 21 - arr1[i] 
    } 
  }
  
	return answer;
}
let arr1=[9, 9, 9, 9, 7, 9, 8];
let arr2=[23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2))
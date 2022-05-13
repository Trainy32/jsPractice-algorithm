// 가운데 글자 가져오기 https://programmers.co.kr/learn/courses/30/lessons/12903
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.


// function solution(s) {
//   var answer = '';
//   return answer;
// }

let s = "example" //  받아온 단어
let answer = '' // 정답

middle = s.length / 2   // 받아온 단어의 길이를 구해와 2로 나눔
sArray = s.split('')  // 받아온 단어 -> 배열로 변환

if (s.length >= 0 && s.length <= 100 ) {  //단어길이가 0보다 크고 100보다 작을때
  if ( s.length % 2  === 0 )  {  // 짝수이면
    answer =  sArray[middle - 1] + sArray[middle]   //배열 중간 2글자 뽑기
   } else {  // 홀수이면
    answer = sArray[Math.floor(middle)]  //배열 가운데 1글자 뽑아오기
  }  

}
 
console.log(answer)

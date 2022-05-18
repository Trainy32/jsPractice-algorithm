// 숫자 문자열과 영단어 https://programmers.co.kr/learn/courses/30/lessons/81301
// 내거!

let s = "one4seveneight"
let b ="23four5six7"
let c = "1zerotwozero3"
let answer = 0

let engNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  
for (i=0; i<10;) { 
  if (s.includes(engNum[i])) { //만약 i번째 영문숫자가 문자열에 존재하면
    s = s.replace(engNum[i],i) // 그걸 i로 바꿔준다
  } else { i++; } // 더이상 같은 값이 없을 경우에만 i+1
}

console.log(s*1)

// 다른 사람 답변
//     for(let i=0; i< numbers.length; i++) {
//         let arr = s.split(numbers[i]); //영단어를 기준으로 쪼갠다음 (이과정에서 영단어 자동 아웃)
//         s = arr.join(i); // 인덱스 번호를 가운데 두고 합쳤다.
//     }

//     return Number(s);
// }

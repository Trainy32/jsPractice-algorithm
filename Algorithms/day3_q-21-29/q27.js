// 콜라츠 추측 https://programmers.co.kr/learn/courses/30/lessons/12943

let num = 626331
let count = 0

while (num != 1) { // num이 1이 되기 전까지만 반복한다
  
  if (count === 500) { count = -1; break;  // 500번 작동했다면 반환값을 -1로 하고 강제 종료
  } else if (num % 2 === 0) { num /= 2  //기본조건이 충족되었다면, 짝수일때는 숫자를 2로 나누고
  }  else { num = num * 3 + 1 } // 홀수일떄는 숫자*3+1 을 해준다

  count++ // 카운트가 1씩 올라간다.
}

console.log(count)


// 다른사람 답
// function collatz(num) {
//   var answer = 0;
//   while(num !=1 && answer !=500){
//       num%2==0 ? num = num/2 : num = num*3 +1;
//   answer++;
// }
//   return num == 1 ? answer : -1;
// }

// 다른사람답 2
// const solution = (num) => collatzGuessCount(num, 0);

// const collatzGuessCount = (num, acc) => 
//   (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

// const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);
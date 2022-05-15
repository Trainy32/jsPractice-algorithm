// 완주하지 못한 선수 https://programmers.co.kr/learn/courses/30/lessons/42576


let participant = ["leo", "kiki", "eden"]
let	completion = ["eden", "kiki"]

// for (i=0; i<completion.length; i++) {
//   participant.splice(participant.indexOf(completion[i]),1)
// }


// console.log(participant[0])
// ㅠㅠ 정답은 맞게 출력하는데 효율이 안되네,,, ㅠㅠ

let answer = ''

participant.sort();
completion.sort();

for (i=0; i<participant.length; i++) {
  if (participant[i] != completion[i]) {
    answer = participant[i] 
    break; 
  }
}

console.log(answer)

// 하긴 했는데 코드는 더 길어졌다 ㅋㅋㅋ 근데 뭐 더 빠르다니까.. 응..
// 잘 풀려면 역시 map 이 필요한가 보다. 언제 거기까지 배우지. 일요일 태울까.

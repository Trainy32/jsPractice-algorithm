// 완주하지 못한 선수 https://programmers.co.kr/learn/courses/30/lessons/42576


let participant = ["leo", "kiki", "eden"]
let	completion = ["eden", "kiki"]

// for (i=0; i<completion.length; i++) {
//   participant.splice(participant.indexOf(completion[i]),1) 
// }


// console.log(participant[0])
// ㅠㅠ 정답은 맞게 출력하는데 효율이 안되네,,, ㅠㅠ

let answer = ''

participant.sort(); //먼저 비교하기 편하게 두 배열 모두 알파벳순 정렬해준다
completion.sort();

for (i=0; i<participant.length; i++) { //참가자 수만큼 돌린다 
  if (participant[i] != completion[i]) { // i번째의 참가자가 i번째 완주자와 이름이 다르면
    answer = participant[i] // 그 사람이 완주하지 못한 사람!
    break; // 불필요하게 프로그램이 돌아가지 않게 찾는 즉시 종료시킨다
  }
}

console.log(answer)

// 하긴 했는데 코드는 더 길어졌다 ㅋㅋㅋ 근데 뭐 더 빠르다니까.. 응..
// 잘 풀려면 역시 map 이 필요한가 보다. 언제 거기까지 배우지. 일요일 태울까.

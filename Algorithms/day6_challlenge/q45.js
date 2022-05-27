// K번째수 https://programmers.co.kr/learn/courses/30/lessons/42748

let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

let answer = []


// 커맨드 배열 구조 : [[시작숫자, 끝낼숫자, 정렬 후에 몇번째 값 뽑을건지 ][…][…]]
// 시작 숫자 : 인덱스 번호가 아니다! 1부터 시작한다!

for (i=0; i<commands.length ;i++) {  //주어진 커맨드 배열 숫자만큼 수행
  //array를 슬라이스해준다. 인덱스는 0부터 시작하니 slice의 시작 인덱스에서는 -1을 해줬다.
  let temp = array.slice(commands[i][0]-1, commands[i][1]); //우선 임시 배열에 넣어둔상태로
  temp.sort((a,b) => (a-b)) // 예쁘게 정렬해주고
  answer.push(temp[commands[i][2]-1]); // 정답 배열에 밀어넣는다!
} 



console.log(answer)


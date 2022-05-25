// K번째수 https://programmers.co.kr/learn/courses/30/lessons/42748

let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

let answer = []

for (i=0; i<commands.length ;i++) {  //커맨드 숫자만큼 수행
  let temp = array.slice(commands[i][0]-1, commands[i][1]);
  temp.sort((a,b) => (a-b))
  answer.push(temp[commands[i][2]-1]);
} 



console.log(answer)


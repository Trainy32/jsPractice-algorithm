
let temp = 7;
let answer = 0;
let temp2 = 0




while (Math.sqrt(temp)%1 === 0 && temp != Math.sqrt(temp)) {
    temp = Math.sqrt(temp)
}

for (l=2; l<temp; l++) {
  temp2 += temp%l === 0
}

if (temp2 == 0) {answer++}

console.log(answer)
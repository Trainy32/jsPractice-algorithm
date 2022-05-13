// 핸드폰 번호 가리기 https://programmers.co.kr/learn/courses/30/lessons/12948

phone_number = "01033334444"

let answer = 0;

// if ( phone_number.length >= 4  && phone_number.length <=20 ) {
//   answer =  phone_number.substr(0, phone_number.length - 4) + "*".repeat(4)
// }

// .. 아 세상에 거꾸로 했잖아

if ( phone_number.length >= 4  && phone_number.length <=20 ) {
  answer =  "*".repeat(phone_number.length-4) + phone_number.substr(phone_number.length - 4) 
}


console.log(answer)  

// 다른사람 답변  slice가 몰까
// function hide_numbers(s){
//   var result = "*".repeat(s.length - 4) + s.slice(-4);
//   //함수를 완성해주세요

//   return result;
// }
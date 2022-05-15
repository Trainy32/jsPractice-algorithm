// 2016년 https://programmers.co.kr/learn/courses/30/lessons/12901

let answer = 0;
let a = 5
let b = 24

let firstDay = [1, 32, 61, 92, 122, 153, 183, 214, 245, 275, 306, 336] // 각 월의 시작날짜가 16'년의 몇번째 날인지 체크
let dayIs = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']  // 요일 체크~ 순서는 1월 1일인 '금'이 인덱스 1번이게 했어요. 

answer = dayIs[(firstDay[a-1]+(b-1))%7]

console.log(answer)


// // 여기서.. COUNT를.. 프로그램이 알아서 계산하게 만들고 싶었어요.... 

let monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let dayIs2 = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'] 
let thisMonth = monthDays.slice(0,a).reduce(function(sum,days){return sum+days})

let answer2 = dayIs2[(thisMonth+b)%7]

console.log(answer2)

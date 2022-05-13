console.log('My' + 'car')
console.log('1' + 2)  // 뒤의 숫자까지 문자열로 바뀜!

//템플릿 리터럴 : 백틱(`)을 사용해 문자열 데이터를 표현하면 더 편리하다.
const price = 1000
console.log('이 빵의 가격은' + price + '원 입니다.')
console.log(`이 빵의 가격은 ${price}원 입니다`)


//산술 연산자
console.log(2 + 1) // 더하기
console.log(2 - 1) // 빼기
console.log(4 / 2) // 나누기
console.log(2 * 3) // 곱하기
console.log(10 % 3) // 나머지(remainder) 연산자. 1을 출력
console.log(10 ** 2) // exponentiation. 10의 2승인 100을 출력

//증감연산자
let count = 1
const preIncrement = ++count
// 증감연산자를 앞에 놓게 되면 아래 주석으로 처리한 두 줄의 코드와 같은 내용입니다.
// 먼저 자기 자신에게 1을 더해서 재할당 한 후, 이를 preIncrement 에 할당했다는 의미입니다.
// count = count + 1
// const preIncrement = count
console.log(`count: ${count}, preIncrement: ${preIncrement}`) // count: 2, preIncrement: 2

let counts = 1
const postIncrement = counts++
// 증감연산자를 뒤에 놓게 되면 아래 주석으로 처리한 두 줄의 코드와 같은 내용입니다.
// postIncrement에 자기 자신의 값을 먼저 할당하고, 이후에 1을 더해서 재할당합니다. 
// const postIncrement = count
// count = count + 1

console.log(`count: ${counts}, postIncrement: ${postIncrement}`) // count: 2, postIncrement: 1 

//대입 연산자
const shirtsPrice = 100000
const pantsPrice = 80000
let totalPrice = 0

totalPrice += shirtsPrice // totalPrice = totalPrice + shirtsPrice 와 동일
console.log(totalPrice)

totalPrice += pantsPrice // totalPrice = totalPrice + pantsPrice 와 동일 
console.log(totalPrice)

totalPrice -= shirtsPrice // totalPrice = totalPrice - shirtsPrice 와 동일
console.log(totalPrice) 

//비교 연산자
console.log(1 < 2) // 1이 2보다 작은가? true
console.log(2 <= 2) // 2가 2보다 작거나 같은가? true
console.log(1 > 2) // 1이 2보다 큰가? false
console.log(1 >= 2) // 1이 2보다 크거나 같은가? false

//논리연산자
let isOnSale = true
let isDiscountItem = true

// || 는 연산 대상 중 하나만 true 여도 true 리턴
// && 는 연산 대상이 모두 true 여야만 true 리턴
console.log(isOnSale && isDiscountItem) // true && true 이므로 true
console.log(isOnSale || isDiscountItem) // true || true 이므로 true

isOnSale = false
console.log(isOnSale && isDiscountItem) // false && true 이므로 false
console.log(isOnSale || isDiscountItem) // false || true 이므로 true

isDiscountItem = false
console.log(isOnSale && isDiscountItem) // false && false 이므로 false
console.log(isOnSale || isDiscountItem) // false || false 이므로 false

// ! 는 true를 false로, flase를  true로 바꿔서 리턴
console.log(!isOnSale) // !false 이므로 true

isOnSale = !isOnSale
console.log(!isOnSale) // !true 이므로 false

//일치연산자
console.log(1 === 1) // true
console.log(1 === 2) // false
console.log('Javascript' === 'Javascript') // true
console.log('Javascript' === 'javascript') // 대소문자나 띄워쓰기도 다 정확히 일치해야 해요. 따라서 false

//== 과 === 의 차이 확인해보기
console.log(1 === "1") // false를 출력
console.log(1 == "1" // true를 출력
//정확한 프로그래민을 위해 실무에서는 주로 === 로 사용

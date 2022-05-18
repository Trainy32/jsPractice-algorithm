// 신규 아이디 추천 https://programmers.co.kr/learn/courses/30/lessons/72410

let new_id = 	"abcdefghijklmn.p"
let answer = ''

new_id = new_id.toLowerCase().replace(/[^a-z0-9._-]/g,'').replace(/\.+/g,".").replace(/(^\.*)|(\.*$)/g, '') 
// 1. 소문자로 -> 2. 특문삭제 -> 3. 반복된 '.' 삭제 -> 4. 문자열 앞뒤의 '.' 삭제
if (new_id === '') { new_id = 'a'} // 5번 빈문자열이면 a 대입
new_id = new_id.slice(0,15).replace(/(^\.*)|(\.*$)/g, '') // 6번 15글자 이내로 수정 + 문자열 앞뒤의 '.' 삭제
while (new_id.length <= 2) {new_id += new_id[new_id.length-1]} // 7번 글자길이 2이하 3으로

// new_id = new_id.toLowerCase().split(/[^a-z0-9._-]/g).join('')  // 1,2번 (소문자변환, 특문삭제) 
// while (new_id.includes('..')) { new_id = new_id.replace('..','.')} // 3번 반복된 . 삭제
// new_id = new_id.replace(/(^\.*)|(\.*$)/g, '') // 4번 시작과 끝의 . 삭제
// if (new_id === '') { new_id = 'a'} // 5번 빈문자열이면 a 대입
// if (new_id.length > 16) {new_id = new_id.substring(0,15)} // 6번 16글자 이상이면 자르기 
// new_id = new_id.replace(/(^\.*)|(\.*$)/g, '') // 6-2번 시작과 끝의 . 삭제
// while (new_id.length <= 2) {new_id += new_id[new_id.length-1]} // 7번 글자길이 2이하 3으로


console.log(new_id)

// 다른사람 답변
// const solution = (new_id) => {
//     const id = new_id
//         .toLowerCase()
//         .replace(/[^\w\d-_.]/g, '')
//         .replace(/\.{2,}/g, '.')
//         .replace(/^\.|\.$/g, '')
//         .padEnd(1, 'a')
//         .slice(0, 15)
//         .replace(/^\.|\.$/g, '')        
//     return id.padEnd(3, id[id.length-1])



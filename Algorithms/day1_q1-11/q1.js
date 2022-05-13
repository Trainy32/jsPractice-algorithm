// 직사각형 별찍기 https://programmers.co.kr/learn/courses/30/lessons/12969
// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);

            a = 4
            b = 3

            let stars = '' 

            for (i=0; i<a; i++) {  // a에 주어진 수 만큼
                stars += '*'  // stars에 '*' 을 한개씩 추가한다
            }

            for (i=0; i<b; i++) { // b에 주어진 수 만큼
                console.log(stars) //  stars를 출력한다!
            }
    
// });



// 다른 사람 답

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});
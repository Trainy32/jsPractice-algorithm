
function solution(n){
  n = n.toString().split('').reverse('')
  let result= ''

  for (i=0; i<n.length-1; i++) {
    result += `${n[i]}+`
  }

  result += `${n[n.length-1]}=${n.reduce(function(a,b){return a*1+b*1})}`

	return result;
}
console.log(solution(718253))
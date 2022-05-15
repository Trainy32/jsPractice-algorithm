
arr = [1, 2, 3, 4]

console.log(arr.reduce(function(sum,value){return sum+value}))

console.log(arr.reduce(((sum,value, i) => {return sum+value}), 3))

console.log(arr.slice(0,2).reduce(function(sum,value){return sum+value}))


//console.log(reduceRight)
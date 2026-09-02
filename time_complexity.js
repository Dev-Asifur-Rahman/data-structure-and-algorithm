// check notes q1

function sumFnOne(n) {
    let sum = 0
    for(let i = 0; i<=n; i++){
        sum += i
    }
    return sum
}

// time complexity O(n)

function sumFnTwo(n){
    return n*(n+1) / 2
}

// time complexity O(1)




// console.log(sumFnOne(10))
// console.log(sumFnTwo(10))
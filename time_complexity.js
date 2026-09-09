// check notes q1 for time complexity chart
// tips : ekta line kotobar run korbe sheta n hishebe define hoy

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

function nestedLoopOne(n){
    for(let i =0 ; i<= n; i++){ //n
         for(let j =0 ; j<= n; j++){ //n
            console.log(i,j)
         }
    }
}

// time complexity n * n = n²

function nestedLoopTwo(n){
    for(let i =0 ; i<= n; i++){ //n
         for(let j =0 ; j<= 3; j++){ 
            console.log(i,j)
         }
    }
}

// time complexity (n + 3) = n 
// second loop does not depend on n. its a constant


// console.log(sumFnOne(10))
// console.log(sumFnTwo(10))
// console.log(nestedLoopOne(2))
// console.log(nestedLoopTwo(2))
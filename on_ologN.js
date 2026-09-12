// who is fast ? O(n) or O(logN)

// we will count how many times to reach 1024
// we will always count the worst case for best output

let countN = 0
let count_LogN = 0

function nFN(n){
    for(let i = 1; i <= n ; i++){
        countN += 1
    }
}

function logN(n){
    
    if(n <= 1){
        return
    }
    count_LogN += 1
    logN(n/2)
}

nFN(1024)
logN(1024)


console.log(countN,'times') //1024 times
console.log(count_LogN,'times') //10 times
// tips : input barar sathe sathe output number / memory usage koto barlo 

function sumFnOne(n){
    let sum = 0
    for(let i = 0; i <n.length ; i++){
        sum += n[i]
    }
    return sum //1
}

// space complexity O(1)
// multiple input but output always one (constant)

function newArrayReturn(arr){
    let newArr = []
    for(let i of arr){
        newArr.push(i)
    }
    return newArr
}

// space complexity O(n)
// output length always remains same as input length 

function commonNameFn(arr){
    let uniqueNameArr = []
    for(let i of arr){ //time = n
        let name = i
        if(!uniqueNameArr.includes(name)){ //time = n 
            uniqueNameArr.push(name)
        }
    }
    return uniqueNameArr //space = n
}
// time complexity = O(n²) space complexity = O(n)


// console.log(sumFnOne([1,2,3]))
// console.log(newArrayReturn([1,2,3]))
// console.log(commonNameFn(['a','b','c','a','d','b']))
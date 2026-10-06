// get the sum using recursion

function sumFn(n) {
  return n === 1 ? 1 : n + sumFn(n - 1);
}


// comparing these three fns time and space efficiency
const sumArrayFn = (arr) => {
  return arr.length === 0 ? 0 : arr[0] + sumArrayFn(arr.slice(1)); // t and s = n²
};

// time and space complexity = O(n²)

const sumArrayFn2 = (arr,index=0) =>{
    return arr.length === index ? 0 : arr[index] + sumArrayFn2(arr,(index + 1)) // t and s = n
}

// time and space complexity = O(n)

const sumArrayFn3 = (arr) =>{
    let sum = 0 // s = 1 
    for(let i of arr){ //t = n
        sum += i 
    }
    return sum
}

// time complexity = O(n)
// space complexity = O(1)



const input = 10;
const arrayInput = new Array(7000).fill(1);

// console.log(sumFn(input));
let start = Date.now()
const result = sumArrayFn(arrayInput)
let end  = Date.now()

let start2 = Date.now()
const result2 = sumArrayFn2(arrayInput)
let end2  = Date.now()

let start3 = Date.now()
const result3 = sumArrayFn2(arrayInput)
let end3  = Date.now()

console.log(`${result} is the output of result1 and time is ${end - start} ms`)
console.log(`${result2} is the output of result2 and time is ${end2 - start2} ms`)
console.log(`${result3} is the output of result3 and time is ${end3 - start3} ms`)



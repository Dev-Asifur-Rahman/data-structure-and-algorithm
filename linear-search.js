// check the value one by one from the list until it finds it

function findValueFn(arr, value = 0) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === value) return i
  }
  return -1
}

console.log(findValueFn([4, 8, 6, 4, 2], 12));

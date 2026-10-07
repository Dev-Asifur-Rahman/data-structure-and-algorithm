// prottekta index er value er jonne for loop calano hoy

// 1. j + 1 er jonne last index auto sorted tai (len - 1)
// 2. jehetu every i iteration er jonne last theke ekta ekta sorting length komtese

// example
//  i = 1 --> last index sorted [ ns, ns, sorted]
//  i = 2 --> last index - 1 sorted [ns, sorted, sorted]

function bubbleSortFn(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // 1
    for (let j = 0; j < arr.length - i - 1; j++) { // 2
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const array = [42, 7, 91, 23];

console.log(bubbleSortFn(array));

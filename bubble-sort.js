// prottekta index er value er jonne for loop calano hoy
// sorts using index
// array sorts from last and index number reduces by 1

function bubbleSortFn(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
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

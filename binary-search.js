// while condition hobe jotokkhon start < end false na hoy
// middle diye amra value khujbo and seshe always start = middle = end same hobe

const binarySearchFn = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((start + end) / 2);
  while (start <= end) {
    if (arr[middle] === value) return middle;
    arr[middle] > value ? (end = middle - 1) : (start = middle + 1);
    middle = Math.round((start + end) / 2);
  }
  return -1;
};

const arr = [2, 5, 8, 12, 16, 21, 27, 33, 40, 48];

console.log(binarySearchFn(arr, 16));
console.log(binarySearchFn(arr, 50));

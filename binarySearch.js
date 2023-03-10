// divide and conqueror

function binarySearch(arr, elem) {
  let start = 0
  let end = arr.length
  let middle = Math.floor(start + end / 2)

  while (arr[middle] !== elem) {
    if (elem < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor(start + end / 2)
  }

  return middle
}
console.log(binarySearch([1, 2, 3, 4, 5, 6]), 3)

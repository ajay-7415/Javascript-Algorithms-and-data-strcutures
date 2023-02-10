function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        console.log(arr)
      }
    }
  }
  console.log(arr)
}

bubbleSort([1, 2, 5, 7, 8, 9, 6, 3])

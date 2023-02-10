function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  console.log(arr)
}

insertionSort([4, 64, 44, 641, 66, 4, 44, 4, 5])

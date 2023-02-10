function selectionSort(arr) {
  let lowest = 0

  for (i = 0; i < arr.length; i++) {
    lowest = i
    for (j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] = temp
  }

  console.log(arr)
}

selectionSort([1, 5, 8, 9, 75, 8, 4])

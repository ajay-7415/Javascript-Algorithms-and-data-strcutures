function uniqueSet(arr) {
  let i = 0
  console.log(arr)
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
    console.log(i)
  }
}

uniqueSet([1, 1, 22, 2, 3, 3, 4, 5])

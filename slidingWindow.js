function slidingWindow(arr, num) {
  let maxSum = 0
  let tempSum = 0

  for (i = 0; i < num; i++) {
    maxSum = maxSum + arr[i]
  }
  tempSum = maxSum

  for (i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
    console.log(maxSum)
  }
}

slidingWindow([1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 44, 4, 6, 5555, 55, 5555], 2)

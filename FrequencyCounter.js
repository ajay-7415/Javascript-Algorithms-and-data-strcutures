const frequencyCounter1 = {}
const frequencyCounter2 = {}

function frequencyCounter(arr1, arr2) {
  for (let key of arr1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1
  }
  for (let key of arr2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
    return true
  }
}

console.log(frequencyCounter([1, 2, 2], [1, 4, 4]))

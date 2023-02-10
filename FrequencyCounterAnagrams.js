let lookup = {}

function frequencyCounterAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  for (let key of str1) {
    lookup[key] ? lookup[key]++ : (lookup[key] = 1)
  }

  for (let key of str2) {
    if (!lookup[key]) {
      return false
    } else {
      lookup[key] -= 1
    }
    true
  }
  console.log(lookup)
}

frequencyCounterAnagrams('aaaa', 'aaaa')

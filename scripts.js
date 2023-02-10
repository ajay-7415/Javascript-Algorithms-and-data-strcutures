function checkString(string) {
  let total = {}

  for (let key of string) {
    console.log(key, total)
    total[key] = ++total[key] || 1
  }
}

checkString('hello')

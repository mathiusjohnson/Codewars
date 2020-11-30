function spinWords(string){
  //TODO Have fun :)
  let newArr = []
  const stringArr = string.split(' ')
//   console.log(stringArr)
  for (const word of stringArr) {
    if (word.length < 5) {
      newArr.push(word)
    } else {
      let reverseWord = "";
      for (let i = word.length - 1; i >= 0; i--) {
//         console.log(word[i])
        reverseWord += word[i];
      }
      newArr.push(reverseWord)
    }
  }
  console.log(newArr.join(' '))
  return newArr.join(' ')
}
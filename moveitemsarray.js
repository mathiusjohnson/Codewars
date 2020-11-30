var moveZeros = function (arr) {
  // TODO: Program me
  let newArr = []
  let zeroArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i])
    }
    if (arr[i] === 0) {
      zeroArr.push(arr[i])
    }
  }
  const mergedArr = newArr.concat(zeroArr)
  console.log(mergedArr)
  return mergedArr;
}
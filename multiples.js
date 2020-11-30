function solution(number){
  let results = 0;
  if (Math.sign(number) === -1) {
    return results;
  }
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i)
      results += i;
    }
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i)
      results += i;
    }
    if (i % 3 !== 0 && i % 5 === 0) {
      console.log(i)
      results += i;
    }
  }
  console.log(results)
  return results;
}
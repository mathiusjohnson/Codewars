function findOdd(A) {
  //happy coding!
  let objForA = {}
  for (let i = 0; i < A.length; i++) {
    if (!objForA[A[i]]) {
      objForA[A[i]] = 1;
    }else {
      objForA[A[i]] += 1;
    }
  }
  const values = Object.values(objForA)
  
  let unevenValue;
  for (const value of values) {
    if (value % 2 !==0) {
      unevenValue = value;
    }
  }
  return Number(Object.keys(objForA).find(key => objForA[key] === unevenValue));
}
function solution(number){
  // convert the number to a roman numeral
  const lookup = {M:1000, CM:900, D:500, CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  let roman = '';
  let numeral;
  for (const key in lookup) {
    numeral = Math.floor(number / lookup[key])
    if (numeral >= 0) {
      for (let i = 0; i < numeral; i++) {
        roman += key;
      }
    }
    number = number % lookup[key]
    console.log(number)
    }
  return roman
}

function solution(number){
  // convert the number to a roman numeral
var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

var ans = '';
while(number>0){
    for(a in roman){ 
        if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
            
    }
}
return ans;
}
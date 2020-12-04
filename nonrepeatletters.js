function firstNonRepeatingLetter(s) {
  const results = {};
  let sArr = s.split('')
  for (let i = 0; i < sArr.length; i++) {
    const to_lower = sArr[i].toLowerCase()
    if (to_lower !== " ") {
      if (results[to_lower] == undefined)
        results[to_lower] = [];
      results[to_lower].push(i);
    }
  }
  let char = ''
  for (let key in results) {
    if (results[key].length === 1) {
      char = key
      break
    }
  }
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i].toLowerCase() == char) {
      console.log(sArr[i])
      char = sArr[i]
    }
	}
	  
  return char;

}

function firstNonRepeatingLetter(s) {
	for(var i in s) {
		if(s.match(new RegExp(s[i],"gi")).length === 1) {
			return s[i];
		}
	}
	return '';
}

function firstNonRepeatingLetter(s) {
	var t=s.toLowerCase();
	for (var x=0;x<t.length;x++)
		if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
			return s[x];
	return "";
}


function firstNonRepeatingLetter(str){
  return str.split('').find(e => str.match(new RegExp(`${e}`, 'gi')).length === 1) || ''
}

function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}
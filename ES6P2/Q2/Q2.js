//2. Find the possible combinations of a string and store them in a MAP?

function getCharMap(str) {
    let map = new Map();
    let ix = 0;
    for(let c of str.split("")) {
        map.set(c, ix++);
    }

    return map;
}

function pcmbs(str) {
    if (str.length < 2) return str;
  
    let combinations = [];
    let charMap = getCharMap(str);

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (charMap.get(char) != i)
        continue;
  
      let remainingString = str.slice(0, i) + str.slice(i + 1, str.length);
  
      for (let subPermutation of pcmbs(remainingString))
        combinations.push(char + subPermutation)
    }
    return combinations;
  }

console.log(pcmbs("apple"));
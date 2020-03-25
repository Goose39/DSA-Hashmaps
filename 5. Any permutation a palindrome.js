const HashMap = require('./HashMap');

isPalindrome = (str) => {
  let letters = new HashMap()

  for (let i=0; i < str.length; i++) {
    
    if (letters.get(str[i])) {
      letters.set(str[i], letters.get(str[i]) +1);
    } else letters.set(str[i], 1);

  }
  let oddCount = 0
  // Check for matched letters. Even counts of each letter
  for (let i = 0; i <= letters._hashTable.length && oddCount < 2; i++) {
    if (letters._hashTable[i] && letters._hashTable[i].value % 2 != 0) {
      oddCount++
    }
  }

  if (oddCount < 2) {
    return true
  } else return false
}

console.log(isPalindrome('acecarr'));

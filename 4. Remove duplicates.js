const HashMap = require('./HashMap');

removeDuplicates = (str) => {
  let letters = new HashMap();
  letters.MAX_LOAD_RATIO = 0.5;
  letters.SIZE_RATIO = 3;

  let newStr = '';

  for (let i = 0; i < str.length; i++) {

    if (!letters.get(str[i])) {
      letters.set(str[i], true);
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(removeDuplicates('google all that you think can think of'));

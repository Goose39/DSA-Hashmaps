const HashMap = require('./HashMap');

groupAnagrams = (arr) => {
  let groups = new HashMap();

  for (const item of arr) {
    let key = sort(item);

    if (groups.get(key)) {
      groups.get(key).push(item)
    } else groups.set(key ,[item])
  }

  return console.log(groups._hashTable[0].value), console.log(groups._hashTable[2].value), console.log(groups._hashTable[6].value)
}

sort = (str) => {
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join('');
}

groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'])
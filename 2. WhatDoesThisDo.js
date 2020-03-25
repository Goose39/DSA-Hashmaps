const HashMap = require('./HashMap');

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));

}

//  => 20
//  => 10
// Function prints second value entered as both keys are identical 
// i.e. there is a collision 
//effectivley the value for the key is just updated with the 2nd value;

WhatDoesThisDo();
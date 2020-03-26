let LinkedList = require('./LinkedList')

class HashMap {
  constructor(initialCapacity=8) {
      this.length = 0;
      this._hashTable = [];
      this._capacity = initialCapacity;
      this._deleted = 0;
  }

  get(key) {
      const index = this._findSlot(key);
      if (this._hashTable[index] === undefined) {
          throw new Error('Key error');
      }
      return this._hashTable[index].value;
  }

  set(key, value){
    console.log(key);
      const loadRatio = (this.length + this._deleted + 1) / this._capacity;
      if (loadRatio > HashMap.MAX_LOAD_RATIO) {
          this._resize(this._capacity * HashMap.SIZE_RATIO);
      }
      //Find the slot where this key should be in
      const index = this._findSlot(key);

      if(!this._hashTable[index]){
          this.length++;
          this._hashTable[index] = new LinkedList()
          this._hashTable[index].insertFirst(value)
      } else {
        this._hashTable[index].insertLast(value)
      }
  }

  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
        throw new Error('Key error');
    }
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const index = hash % this._capacity;

   return index
  }

  _resize(size) {
      const oldSlots = this._hashTable;
      this._capacity = size;
      // Reset the length - it will get rebuilt as you add the items back
      this.length = 0;
      this._deleted = 0;
      this._hashTable = oldSlots;
  }

  static _hashString(string) {
      let hash = 5381;
      for (let i = 0; i < string.length; i++) {
          //Bitwise left shift with 5 0s - this would be similar to
          //hash*31, 31 being the decent prime number
          //but bit shifting is a faster way to do this
          //tradeoff is understandability
          hash = (hash << 5) + hash + string.charCodeAt(i);
          //converting hash to a 32 bit integer
          hash = hash & hash;
      }
      //making sure hash is unsigned - meaning non-negtive number. 
      return hash >>> 0;
  }
}

main = () => {
  let lotr = new HashMap();

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandolf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  // lotr._hashTable.map(item => console.log(item))
  // return lotr.get("Hobbit");
  return lotr;

}

console.log(main());
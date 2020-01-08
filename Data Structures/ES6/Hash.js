// average case - constant time complexity
class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value])
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1] // get key, returns value
        }
      }
    }
    return undefined;
  }
  keys() {
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // console.log(this.keyMap[i]); // [ [ 'mcd', 'sucks' ] ]
          // console.log(this.keyMap[i][j]); // [ 'mcd', 'sucks' ]
          // console.log(this.keyMap[i][j][0]); // mcd
          // console.log(this.keyMap[i][j][1]); // sucks
          if (!keysArr.includes(this.keyMap[i][j][0])) { // avoid duplicates
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // console.log(this.keyMap[i]); // [ [ 'mcd', 'sucks' ] ]
          // console.log(this.keyMap[i][j]); // [ 'mcd', 'sucks' ]
          // console.log(this.keyMap[i][j][0]); // mcd
          // console.log(this.keyMap[i][j][1]); // sucks
          if (!valuesArr.includes(this.keyMap[i][j][1])) { // avoid duplicates
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(11);
ht.set("hello world", "bye");
ht.set("doggos are", "cool");
ht.set("cats are", "scratchy");
ht.set("no one", "cares");
ht.set("french", "fries");
ht.set("mcd", "sucks");
ht.set("no one", "knows");

// console.log(ht.keyMap);
// console.log(ht.get("mcd"));
// console.log(ht.get("french"));
console.log(ht.keys());
console.log(ht.values());

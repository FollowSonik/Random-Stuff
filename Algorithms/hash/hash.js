class HashTable {
  store = new Array(10);

  hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return sum;
  }

  add(key, value) {
    this.store[this.hash(key)] = this.store[this.hash(key)] || [];
    this.store[this.hash(key)].push({ key, value });
  }

  get(key) {
    return this.store[this.hash(key)].find((item => item.key === key)).value;
  }
}

const dict = new HashTable();

dict.add('a', 1337);
dict.add('aa', 3228);

console.log(dict.get('a'), dict.get('aa'));
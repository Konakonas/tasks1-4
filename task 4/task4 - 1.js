class fooClass {

    constructor() {
        this._x = 2;
    }
  
    bar() {
      return this._x;
    }
    
    set(number) {
        this._x = number;
    }
  
}
let foo = new fooClass;
console.log('1. ', foo.bar());
console.log('2. ', foo.bar());
setTimeout(function() {
    console.log('3. ', foo.bar());
}, 0);

foo.set(4);
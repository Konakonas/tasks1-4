var _x = 2;

var foo = {
_x: 2,
bar: function() {
    console.log(this);
return this._x;
    }
}

console.log('1. ', foo.bar());
var baz = foo.bar;
console.log('2. ', baz());

setTimeout(function() {
console.log('3. ', baz());
}, 0);

var _x = 4;
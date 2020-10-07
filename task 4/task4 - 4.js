let index = 2;
function* baz(index) {
    while (true) yield index *= 2; 
}
const iterator = baz(1);
console.log(`1.` + index);
console.log(`2.` + iterator.next().value);
console.log(`3.` + iterator.next().value);

/*
Block-Scope : Variable declared inside a {} block cannot be accessed from outside the block.
*/

{
    let a = 25;
    const b = 45;
    var c = 54;
}

console.log(a) // error
console.log(b); // error
console.log(c); // not error

for(let i=1; i<=5; i++){
    console.log(i);
}

console.log(i); // error
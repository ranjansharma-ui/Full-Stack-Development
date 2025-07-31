/*
 # Lexical Scope -> a Variable defined outside a function can be accessible inside another function defined after the variable declaration.

 The opposite is Not true.
*/

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        let a = 20; //The opposite is Not true.
        console.log(x);
        console.log(y);
    }

    console.log(a); // error a is not defined.
    innerFunc();
}

outerFunc()

//hoisting
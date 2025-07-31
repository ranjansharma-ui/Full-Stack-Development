//Default PArameters : Giving a default value to the arguments

function sum(a,b=4) {
    return a+b;
}

console.log(sum(2));

sum(1,3); // 4
sum(1); //a=1, b = undefined


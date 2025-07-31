function sum(a,b) {
    return a+b;

}

console.log(sum(3,4));

//hack of add three 
let sum1 = sum(sum(1,2),3);
console.log(sum1);


function isAdult(age){
    if(age >= 18){
        return "adult"
    } else{
        return "not adult"
    }
}

// Create a Function that returns the sum of numbers from 1 to n

function getSum (n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}
console.log(getSum(3));

//Create a Function that result the concatenation of all strings in an arrays.
let str = ["hi","hello","bye","!"];

function concagt (str) {
    let result =""
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(concagt(str))

// Write an arrow function that reaturns the square of a number 'n';

let square = (n) => {
    return n*n;
}
let squ = (n) => n*n;

console.log(square(4));
console.log(squ(4));


//Write a function that prints "Hello World" 5 times at intervals of 2s each

let id = setInterval(()=>{
    console.log("Hello World!");
    

},2000)

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran")
}, 10000);

// What is output of the following code
const object = {
    message : 'Hello, world!',
    logMessage() {
        console.log(this.message);
        
    }
};

setTimeout(object.logMessage,10000)

// What is output of the following code
let length = 4;
function callback() {
    console.log(this.length);
    
}

const object2 = {
    length: 5,
    method(callback){
        callback();
    },

};

object.method(callback,1,2);

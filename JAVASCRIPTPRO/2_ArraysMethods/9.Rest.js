//Rest : Allows a function to make an indefinite number of arguments and bundle them in an array

function sum(...args){ //arguments
    for(let i=0; i<args.length; i++){
        console.log("You gave us",args[i]);
        
    }
}

sum(1);
sum(2,3);
sum(4,5,6);
sum(8,9,5,4);

function totalSum(...args) {
    return args.reduce((sum, el) => sum + el);
};

console.log(totalSum(2,5,4,6,7));


//create Math.min function

function min(...agrs){
    return agrs.reduce((min,el) => {
        if(min > el){
            return el;
        }else {
            return min;
        }
    })
}

console.log(min(3,5,6,7,1,3))
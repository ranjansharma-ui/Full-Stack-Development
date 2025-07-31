//Spreas with object Literal

const data = {
    email: "ranjan@gamil.com",
    password: "abcd",
};

const dataCopy = {...data, id:1234}; // data copied and  can modified also.

console.log(dataCopy)

let arr = [1, 2, 3, 4, 5]; // value
let obj1 = {...arr}; // obj -> key:value
console.log(obj1);

let obj2 = {..."hello"};
console.log(obj2)
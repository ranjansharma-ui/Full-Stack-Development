let arr = [2,4,3,2,5,6,87,0];
console.log(arr); // [2,4,3,2,5,6,87,0]

//using spread
console.log(...arr); // 2 4 3 2 5 6 87 0

//find min
let min = Math.min(...arr); // to help the finding the minimum number

console.log(min)


// Spread with Array Literals

let nums = [2,4,3,2,5,6,87,0];
let newArr = [...nums]; // copy

newArr.push(6); // change only newArr will not effect oringinal arr

console.log(nums);
console.log(newArr);


let chars = [..."hello"]
console.log(chars)

let odd = [1,2,3,5,7];
let even = [2,4,6,8];

let newAns = [...odd,...even];
console.log(newAns)



let nums = [1,2,3,4];

let finalVal = nums.reduce((res,el) => res + el)
// console.log(finalVal); // 10

// find the maximum in an array
let arr = [1,2,3,4,2,5,7,8,5];

let maxElement = arr.reduce((max,el) => {
    if(max < el) {
        return el;
    } else{
        return max;
    }
}); 
 console.log(maxElement);
 

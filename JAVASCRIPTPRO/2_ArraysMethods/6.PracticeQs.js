// Check if all numbers in our array are multiples of 10 or not.

let nums = [500, 10, 20, 40, 50];

let ans = nums.every((el) => (el % 10 == 0))
console.log(ans);

//Create a function to find the min number in array.

function min(nums) {
    let min = nums.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    })
    return min;

}

min(nums);
console.log(min(nums))

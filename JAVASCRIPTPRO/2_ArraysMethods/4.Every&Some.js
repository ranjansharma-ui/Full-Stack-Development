let data = [2,4,6,2,12];

let check = data.every((el)=>(el%2==0))
console.log(check);


let check2 = data.some((el) => (el%2 == 0))
console.log(check2);

let data1 = [1,3]
let check3 = data1.some((el) => (el % 2==0))
console.log(check3)

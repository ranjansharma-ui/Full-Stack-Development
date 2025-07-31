let num = [1,2,3,4];

let double = num.map((el) => {
    return el*el;
});

console.log(double);
console.log(num)

let Student = [
    {
        name: "Ranjan",
        marks:76
    },
    {
        name:"osho",
        marks:99
    },
]

let gpa = Student.map(function(el){
    return el.marks/10;
})

console.log(gpa)
let arr = [1,2,3,4,5]

function print(el){
    console.log(el);
    
}

// arr.forEach(print)

//OR
arr.forEach(function(el){
    // console.log(el)
})

//Use the array of Object

let arrObj = [
    {
        name: "Ranjan",
        marks:76
    },
    {
        name:"osho",
        marks:99
    },
]

arrObj.forEach((student) => {
    console.log(student);
    
});
arrObj.forEach((student) => {
    console.log(student.marks);
    
});
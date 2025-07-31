const classInfo = [
    {
        name : "Ranjan",
        age : 19,
        grade : "A+"
    },
    {
        name : "Rocky",
        age : 17,
        grade : "O"
    },
    {
        name : "pawan",
        age : 23,
        grade : "A++"
    }
]

console.log(classInfo);
console.log(classInfo[2])

console.log(classInfo[1].name)
console.log(classInfo[1].grade)
// updatation
classInfo[0].age = 18.5
console.log(classInfo)

//addtion
classInfo[1].gender = "male"

console.log(classInfo)

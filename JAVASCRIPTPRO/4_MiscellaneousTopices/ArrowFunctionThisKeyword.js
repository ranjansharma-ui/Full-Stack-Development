// this keyword with Arrow Function
const Student = {
    name : "Ranjan",
    marks : 95,
    prop : this, // window object
    getName : function (){
        console.log(this)
        return this.name;
    },
    getMarks: () => {
        console.log(this); // parent's scope -> window
        return this.marks;
    },

    getInfo1 : function() {
        setTimeout( () => {
            console.log(this)
        },2000);
    },
    getInfo2 : function() {
        setTimeout(function () {
            console.log(this)
        }, 2000);
    }
}
console.log(Student);
console.log(Student.getName());

console.log(Student);
console.log(Student.getMarks()) // window object

/**
 * lexical order follow
 */







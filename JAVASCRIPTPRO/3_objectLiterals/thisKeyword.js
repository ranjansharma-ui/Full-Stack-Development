/*
 this Keyword refers to an object that is executing the current piece of code.
*/

const student = {
    name : "Ranjan",
    age: 19,
    eng : 79,
    math : 84,
    phy :72,
    getAvg() {
        console.log(this) // all elements print of object
        let avg = Math.floor((this.eng + this.math + this.phy) /3);
        console.log(`${this.name} got avg marks = ${avg}`);
        
    }

}

function getAvg() {
        console.log(this) // all elements print of object
        
    }
student.getAvg()
getAvg() // window object
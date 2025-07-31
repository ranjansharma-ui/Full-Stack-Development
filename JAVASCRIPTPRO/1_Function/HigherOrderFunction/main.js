/*
 Higher Order Functions
  A function that does one or both:

  ->takes one or multiple functions as arguments
  
  -> returns a function

*/

//Take one or multiple functions as arguments

function multipleGreet(func, c) {
    for (let i = 1; i <= c; i++) {
        func();

    }
}

let greet = function () {
    console.log("hello");
}

multipleGreet(greet, 3)
// multipleGreet(function() {console.log("namaste");
// },1000);


//Return a Function

let odd = function (n) {
    console.log(!(n % 2 == 0));
}

let even = function (n) {
    console.log((n % 2 == 0));

}

function oddOrEvenFactory(request) {
    if (request == "odd") {
       return function (n) {
            console.log(!(n % 2 == 0));
        }

        
    } else if (request == "even") {
        return function (n) {
            console.log((n % 2 == 0));
        }
      
    } else {
        console.log("Wrong request!")
    }

}
let request = "odd";
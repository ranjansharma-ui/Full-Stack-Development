const max = prompt("enter the max number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number : ");

while(true) {
    if(guess == "quit"){
        console.log("User quit");
        break;
        
    }
    if(guess == random) {
        console.log("You are right!! random number was",random);
    }
    else if(guess < random){
        guess = prompt("hit : your guess was too small . please try again")
    }
    else{
        guess = prompt("hit : your guess was too large . please try again")
    }
}
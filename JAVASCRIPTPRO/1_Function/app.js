//declaration the function
function hello() {
  console.log("hello");
}

//calling the function
hello();

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

print1to5();

function isAdult() {
  let age = 18;
  if (age >= 18) console.log("Adult");
  else console.log("Not adult");
}
isAdult();

//practices
function printPoem() {
  console.log("Twinkle Twinkle, little star");
  console.log("how I wonder what you are");
}
printPoem();

//practices-2
function rollDice() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}

rollDice()
rollDice()
rollDice()
rollDice()


// Arguments in function
function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);

}
printInfo("ram",23);
printInfo("Ranjan",19)
printInfo("Ranj") // undefined
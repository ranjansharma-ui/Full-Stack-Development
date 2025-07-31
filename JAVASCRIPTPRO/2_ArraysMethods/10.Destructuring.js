// Destructuring :- Storing value of array into multiple variables

let names = ["tony", "peter", "steve", "bruce"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerUp = names[2];
//OR
let [winner,runnerup,secondRunnerUp, ...others] = names;
console.log(winner);
console.log(runnerup);
console.log(secondRunnerUp);
console.log(others)



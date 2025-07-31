let step1 = Math.random();

let step2 = step1*10;

let step3 = Math.floor(step2);

console.log(step3)


//Summarize  , From 1 to 10


for(let i = 0; i<5; i++){
    let random = Math.floor(Math.random()*10) + 1;
    
    console.log(random)
}

// generate the number 21,22,23,24,25
for (let i = 0; i<5; i++){
    let random = Math.floor(Math.random()*5) + 20;
    console.log(random);
    
}

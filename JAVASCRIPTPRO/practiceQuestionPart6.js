// Q.1. Write a JavaScript function that returns array elements larger than a number

const arr = [2, 4, 3, 6, 5];
let larger = 0;
for (let i = 0; i < arr.length; i++) {
  if (larger < arr[i]) {
    larger = arr[i];
  }
}
console.log(larger);

// Qs2.Writev]aJavaScriptfunctiontoextractuniquecharactersfromastring.Example:str=“abcdabcdefgggh”ans=“abcdefgh”

let str = "abcdabcdefgggh";

function getUnique(str) {
  let ans = "";

  for(let i = 0; i < str.length; i++){
    let currChar = str[i];
    if(ans.indexOf(currChar) == -1) {

      ans+=currChar;
    }
  }
  return ans;
}


// Q.3

function longestCountry(countryArr){
    let n = countryArr.length;
   let str = "";

    for(let i=0; i<n; i++){
        if(countryArr[i].length > structuredClone.length){
            str = countryArr[i];
        }
    }
    return str;
}

let rs = longestCountry(["Australia","Germany","UnitedStatesofAmerica"]);
console.log(rs)


//Write a JavaScript function to count the number of vowels in a String argument.

let input = "edu";
let count = 0;

for (let i=0; i<input.length; i++){
  if(input[i] == 'a' || input[i] == 'e' || input[i] =='i' || input[i] =='o' || input[i] =='u') {
    count++;
    
    
  }
}

console.log(count)

//Q5

let start = 100;
let end = 200;

function generateRandom(start,end){
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start,end))
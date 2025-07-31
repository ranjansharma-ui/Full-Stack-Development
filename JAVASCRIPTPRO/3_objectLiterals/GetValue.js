/*
  -> Js automatically converts object keys to strings.
  -> Even if we made the number as a key, the number will be converted to string.

*/

const obj = {
    1 : "a",
    2: "b",
    true : "c",
    null : "d",
    undefined : "e",
}

console.log(obj);

obj[1]; //convert into string firstly o/p -> 'a'

// obj.1; // Error . opertor is not directly chance into string

obj.null;
obj.undefined;
obj.true;



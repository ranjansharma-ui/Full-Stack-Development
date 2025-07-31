/**
 * JSON : JavaScript Object Notation -> www.json.org
 * Accessing Data from Json
 
 JSON -> return in String

 * JSON.parse(data) Method -> To parse a String data into a JS object
 
 * JSON.stringify(json) -> To parse a JS object data into JSON.
 */


let jsonResponce = '{"fact":"A healthy cat has a temperature between 38 and 39 degrees Celcius.","length":66}';
console.log(jsonResponce);

let validRes = JSON.parse(jsonResponce);
console.log(validRes.fact);

let student = {
    name : "Ranjan",
    marks : 90,
    id : 434
}

let Json = JSON.stringify(student);
console.log(Json);

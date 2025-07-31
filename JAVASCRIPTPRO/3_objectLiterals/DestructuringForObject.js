const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi","english","math", "science"],
    username: "karan@123",
    password: "abcd",

};

let { username, password,city:place = "Mumbai"} = student;

console.log(username,password,place);


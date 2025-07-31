const post = {
    userName : "@ranjansharma__",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags : ["@coding"]
}

console.log(post)

// Get Value
post["userName"];
//or
post.userName;


let prop = "reposts";
console.log(post[prop]); //5
console.log(post.prop);  // undefined

/*
Async Keyword : Create an Async Function and return type Promise-> method can apply like then and catch
 */

async function great(){
    throw "404 page not found"
    // abc.abc();
    return "hello";
}

great().then((result)=>{
    console.log("promise was resolved");
    console.log("result was : ", result);
})
.catch((err) => {
    console.log("Promise was rejected with err : ",err);
})

// with arrow function

let demo = async () => {
    return 5;
}
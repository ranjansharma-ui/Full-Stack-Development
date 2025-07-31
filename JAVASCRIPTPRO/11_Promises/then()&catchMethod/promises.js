function savetoDb(data) {
    
    
    return new Promise((resolve, reject) => {
        let internertSpeed = Math.floor(Math.random() * 10) + 1;
        
        if(internertSpeed > 4){
            resolve("success : data was saved");
        }
        else{
            reject("failure : weak connection");
        }
    });

}

let request = savetoDb("Ranjan Bhai!");

// request
//     .then(() => {
//         console.log("Promises was resolved");
//         console.log(request)
        
//     })
//     .catch(() => {
//         console.log("Promises was rejected!")
//         console.log(request)
//     })

//or

savetoDb("Ranjan bhai!")
    .then(() => {
        console.log("Promises was resolved");
       

    })
    .catch(() => {
        console.log("Promises was rejected!")
       
    });

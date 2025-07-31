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


savetoDb("ApnaCollege")
    .then((result) => {
        console.log("data1 resolved");
        console.log("result of promise: ",result);
        return savetoDb("Hello world")
    })
    .then((result) => {
        console.log("data2 resolved");
        console.log("result of promise: ",result);
        return savetoDb("Ranjan")
    })
    .then((result)=>{
        console.log("Data3 saved")
        console.log("result of promise: ",result);
    })
    .catch((error) => {
        console.log("some Promises was rejected!")
        console.log("error of promise: ",error);
       
    });

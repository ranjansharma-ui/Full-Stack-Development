/*
Promises -> Object(resolve & reject) or (success & failure) can say.
 */


// savetoDb(
//     "Ranjan",
//     () => {
//         console.log("Success! :");
//         savetoDb(
//             "Data2",
//             () => {
//                 console.log("Data saved in db");
//                 savetoDb(
//                     "ShardaMam",
//                     () => {
//                         console.log("Success: data saved in db")
//                     },
//                     () => {
//                         console.log("Connection weak: data was not entered!")
//                     }
//                 )
//             },
//             () => {
//                 console.log("connection weak!");
//             }
//         );
//     },
//     () => {
//         console.log("Failure! : connection weak");
//     }
// );



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

savetoDb("Ranjan Bhai!");

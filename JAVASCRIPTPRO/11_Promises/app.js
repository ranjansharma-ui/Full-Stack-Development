/*
#PROMISES : The Promise object represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
 */

function savetoDb(data, success, failure) {
    let internertSpeed = Math.floor(Math.random() * 10) + 1;
    if (internertSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb(
    "Ranjan",
    () => {
        console.log("Success! :");
        savetoDb(
            "Data2",
            () => {
                console.log("Data saved in db");
                savetoDb(
                    "ShardaMam",
                    () => {
                        console.log("Success: data saved in db")
                    },
                    () => {
                        console.log("Connection weak: data was not entered!")
                    }
                )
            },
            () => {
                console.log("connection weak!");
            }
        );
    },
    () => {
        console.log("Failure! : connection weak");
    }
);

//code-hell -> confusing code we used promises

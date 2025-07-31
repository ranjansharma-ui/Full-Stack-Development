/*
 * using Fetch : fetch(url)
 */



let url = 'https://catfact.ninja/fact';

// fetch(url); // => promise return

fetch(url)
.then((res) => {
    // console.log(res);
    // res.json(); => return promise
    // console.log(res.json())
    // res.json().then((data) => {
    //     console.log(data)
    // });
    return res.json();
})
.then((data) => {
    console.log("data1 = ",data.fact)
    return fetch(url);
})
.then((res) => {
    return res.json();
})
.then((data2) => {
    console.log("data2 = ", data2.fact)
})
.catch((err) => {
    console.log("ERROR -",err);
})


//asyncro...
console.log("i ' m happy!")
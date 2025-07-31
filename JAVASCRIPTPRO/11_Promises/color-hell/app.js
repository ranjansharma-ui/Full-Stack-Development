h1 = document.querySelector("h1");

function changeColor(color, delay) {
   return new Promise((resolve,reject) => {
        setTimeout(() => {
        h1.style.color = color;
        resolve("Color changed")
        
    },delay)
    })
    
}

changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("Orange color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed")
    return changeColor("green",1000)
})
.then(()=>{
    console.log("green color was completed")
})

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("orange", 1000, () => {

//             })
//         })
//     })
// })

//callback-hell confusing
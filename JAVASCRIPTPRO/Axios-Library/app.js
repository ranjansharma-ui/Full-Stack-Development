/*
  Axios -> Library to make HTTP requests
*/


let url2 = "https://dog.ceo/api/breeds/image/random";


async function getImg() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
      
    } catch (e) {
        console.log("error - ", e);
        return "No Image found";

    }

}


let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let link = await getImg();
    console.log(link)
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
})








// let url = "https://catfact.ninja/fact";

// async function getFatch() {
//     try {
//         let res = await axios.get(url);
//         // console.log(res)
//         return res.data.fact;
//     } catch (e) {
//         console.log("error - ", e);
//         return "No fact found";

//     }

// }


// let btn = document.querySelector("button");

// btn.addEventListener("click", async()=>{
//     let fact = await getFatch();
//     console.log(fact)
//     let p = document.querySelector("#result")
//     p.innerText = fact;
// })